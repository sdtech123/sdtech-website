require 'sinatra'



#Why/how do i add visuals to this page?

# get '/' do			#get methods takes two argumetns string: website
# 	p "#{Time.now}"	#block of ruby code executed when
# end

not_found do
  send_file(
  File.join(settings.public_folder, "404.html")
)
end



get '/' do
  send_file File.join(settings.public_folder, 'soccer5.html')
end

get '/:file_name' do |fname|
  send_file(
    File.join(settings.public_folder, "#{fname}.html")
  )
end
