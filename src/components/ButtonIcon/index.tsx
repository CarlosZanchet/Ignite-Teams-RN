import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

interface Props extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({icon, type = 'PRIMARY' ,...rest}:Props) {
  return (
    <Container {...rest}>
      <Icon 
        name="home" 
        type={type} 
      />
    </Container>
  )
}