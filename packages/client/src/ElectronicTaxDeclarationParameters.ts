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
import type { ElectronicTaxDeclarationParametersApi } from './ElectronicTaxDeclarationParametersApi';
import { ContactPersonType } from './ContactPersonType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ElectronicTaxDeclarationParameters" of service "d365_metadata".
 */
export class ElectronicTaxDeclarationParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ElectronicTaxDeclarationParametersType<T>
{
  /**
   * Technical entity name for ElectronicTaxDeclarationParameters.
   */
  static override _entityName = 'ElectronicTaxDeclarationParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ElectronicTaxDeclarationParameters entity.
   */
  static _keys = ['dataAreaId', 'ID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Digipoort Status Url.
   * @nullable
   */
  declare digipoortStatusUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Initials.
   * @nullable
   */
  declare contactInitials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Out.
   */
  declare timeOut: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Ca Certificate.
   * @nullable
   */
  declare caCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auth Certificate.
   * @nullable
   */
  declare authCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Contact Type.
   * @nullable
   */
  declare vatContactType?: ContactPersonType | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Icp Contact Type.
   * @nullable
   */
  declare icpContactType?: ContactPersonType | null;
  /**
   * Fiscal Group.
   * @nullable
   */
  declare fiscalGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Address.
   * @nullable
   */
  declare authorizationAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Id.
   * @nullable
   */
  declare contactId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Prefix.
   * @nullable
   */
  declare contactPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format Mapping.
   */
  declare formatMapping: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Part Of Fiscal Group.
   * @nullable
   */
  declare companyPartOfFiscalGroup?: NoYes | null;
  /**
   * Digipoort Delivery Url.
   * @nullable
   */
  declare digipoortDeliveryUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ElectronicTaxDeclarationParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ElectronicTaxDeclarationParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  digipoortStatusUrl?: DeserializedType<T, 'Edm.String'> | null;
  contactInitials?: DeserializedType<T, 'Edm.String'> | null;
  timeOut: DeserializedType<T, 'Edm.Int32'>;
  caCertificate?: DeserializedType<T, 'Edm.String'> | null;
  authCertificate?: DeserializedType<T, 'Edm.String'> | null;
  vatContactType?: ContactPersonType | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  icpContactType?: ContactPersonType | null;
  fiscalGroup?: DeserializedType<T, 'Edm.String'> | null;
  authorizationAddress?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  contactId?: DeserializedType<T, 'Edm.String'> | null;
  contactPrefix?: DeserializedType<T, 'Edm.String'> | null;
  formatMapping: DeserializedType<T, 'Edm.Int64'>;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  companyPartOfFiscalGroup?: NoYes | null;
  digipoortDeliveryUrl?: DeserializedType<T, 'Edm.String'> | null;
}
