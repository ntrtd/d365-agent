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
import type { VivaIntEssPersonalDetailsApi } from './VivaIntEssPersonalDetailsApi';

/**
 * This class represents the entity "VivaIntEssPersonalDetails" of service "d365_metadata".
 */
export class VivaIntEssPersonalDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VivaIntEssPersonalDetailsType<T>
{
  /**
   * Technical entity name for VivaIntEssPersonalDetails.
   */
  static override _entityName = 'VivaIntEssPersonalDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VivaIntEssPersonalDetails entity.
   */
  static _keys = ['PersonnelNumber', 'LegalEntityId'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Id.
   */
  declare legalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Code.
   * @nullable
   */
  declare countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location.
   * @nullable
   */
  declare addressLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title Id.
   * @nullable
   */
  declare titleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Primary Contact Email.
   * @nullable
   */
  declare primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Type Id.
   * @nullable
   */
  declare positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reports To.
   * @nullable
   */
  declare reportsTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Years Of Service.
   */
  declare yearsOfService: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Primary Contact Phone Extension.
   * @nullable
   */
  declare primaryContactPhoneExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Primary Contact Phone.
   * @nullable
   */
  declare primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VivaIntEssPersonalDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface VivaIntEssPersonalDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  legalEntityId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionCode?: DeserializedType<T, 'Edm.String'> | null;
  addressLocation?: DeserializedType<T, 'Edm.String'> | null;
  titleId?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactEmail?: DeserializedType<T, 'Edm.String'> | null;
  positionTypeId?: DeserializedType<T, 'Edm.String'> | null;
  reportsTo?: DeserializedType<T, 'Edm.String'> | null;
  yearsOfService: DeserializedType<T, 'Edm.Decimal'>;
  primaryContactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  primaryContactPhone?: DeserializedType<T, 'Edm.String'> | null;
}
