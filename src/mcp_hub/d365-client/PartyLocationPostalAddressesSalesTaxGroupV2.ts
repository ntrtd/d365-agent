/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PartyLocationPostalAddressesSalesTaxGroupV2Api } from './PartyLocationPostalAddressesSalesTaxGroupV2Api';
import { NoYes } from './NoYes';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "PartyLocationPostalAddressesSalesTaxGroupV2" of service "d365_metadata".
 */
export class PartyLocationPostalAddressesSalesTaxGroupV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PartyLocationPostalAddressesSalesTaxGroupV2Type<T>
{
  /**
   * Technical entity name for PartyLocationPostalAddressesSalesTaxGroupV2.
   */
  static override _entityName = 'PartyLocationPostalAddressesSalesTaxGroupV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyLocationPostalAddressesSalesTaxGroupV2 entity.
   */
  static _keys = ['PartyNumber', 'LocationId', 'ValidFrom', 'LegalEntity'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * City In Kana.
   * @nullable
   */
  declare cityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Role Delivery.
   * @nullable
   */
  declare isRoleDelivery?: NoYes | null;
  /**
   * Is Private.
   * @nullable
   */
  declare isPrivate?: NoYes | null;
  /**
   * Address.
   * @nullable
   */
  declare address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Latitude.
   */
  declare latitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Role Invoice.
   * @nullable
   */
  declare isRoleInvoice?: NoYes | null;
  /**
   * Roles.
   * @nullable
   */
  declare roles?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street In Kana.
   * @nullable
   */
  declare streetInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Role Home.
   * @nullable
   */
  declare isRoleHome?: NoYes | null;
  /**
   * Apartment Ru.
   * @nullable
   */
  declare apartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary Tax Registration.
   * @nullable
   */
  declare isPrimaryTaxRegistration?: NoYes | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention To Address Line.
   * @nullable
   */
  declare attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Location Owner.
   * @nullable
   */
  declare isLocationOwner?: NoYes | null;
  /**
   * Building Ru.
   * @nullable
   */
  declare buildingRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Private Postal Address.
   * @nullable
   */
  declare isPrivatePostalAddress?: NoYes | null;
  /**
   * Longitude.
   */
  declare longitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Role Business.
   * @nullable
   */
  declare isRoleBusiness?: NoYes | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Box.
   * @nullable
   */
  declare postBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building Compliment.
   * @nullable
   */
  declare buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Iso Code.
   * @nullable
   */
  declare countryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PartyLocationPostalAddressesSalesTaxGroupV2Api<T>) {
    super(_entityApi);
  }
}

export interface PartyLocationPostalAddressesSalesTaxGroupV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  isPrimary?: NoYes | null;
  cityInKana?: DeserializedType<T, 'Edm.String'> | null;
  isRoleDelivery?: NoYes | null;
  isPrivate?: NoYes | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: Timezone | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  latitude: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isRoleInvoice?: NoYes | null;
  roles?: DeserializedType<T, 'Edm.String'> | null;
  streetInKana?: DeserializedType<T, 'Edm.String'> | null;
  isRoleHome?: NoYes | null;
  apartmentRu?: DeserializedType<T, 'Edm.String'> | null;
  isPrimaryTaxRegistration?: NoYes | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  isLocationOwner?: NoYes | null;
  buildingRu?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  isPrivatePostalAddress?: NoYes | null;
  longitude: DeserializedType<T, 'Edm.Decimal'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  isRoleBusiness?: NoYes | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  postBox?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
}
