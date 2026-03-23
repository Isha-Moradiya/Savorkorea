import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Camera, Save, LogOut } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Please login to view your profile.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSave = () => {
    updateProfile(formData.name, formData.email);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] border border-border shadow-xl overflow-hidden">
          <div className="h-48 bg-destructive/10 relative">
            <div className="absolute -bottom-16 left-12">
              <div className="relative group">
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-32 h-32 rounded-3xl border-4 border-white object-cover shadow-lg"
                />
                <button className="absolute inset-0 bg-black/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Camera size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-20 p-12">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h1 className="font-serif text-3xl font-bold text-primary mb-1">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
              <div className="flex gap-3">
                {isEditing ? (
                  <button 
                    onClick={handleSave}
                    className="bg-destructive text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Save size={18} /> Save Changes
                  </button>
                ) : (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="bg-secondary text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-muted transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
                <button 
                  onClick={logout}
                  className="p-2.5 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-bold text-lg text-primary border-b pb-2">Personal Information</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input 
                        disabled={!isEditing}
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none disabled:opacity-60"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <input 
                        disabled={!isEditing}
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary border-none focus:ring-2 focus:ring-destructive/20 outline-none disabled:opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-lg text-primary border-b pb-2">Account Activity</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                    <p className="text-sm font-bold text-primary">Recent Orders</p>
                    <p className="text-xs text-muted-foreground mt-1">You haven't placed any orders yet.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-secondary/50 border border-border">
                    <p className="text-sm font-bold text-primary">Reservations</p>
                    <p className="text-xs text-muted-foreground mt-1">No upcoming reservations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}