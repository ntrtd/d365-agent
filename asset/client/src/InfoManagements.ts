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
import type { InfoManagementsApi } from './InfoManagementsApi';
import { NoYes } from './NoYes';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * This class represents the entity "InfoManagements" of service "d365_metadata".
 */
export class InfoManagements<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InfoManagementsType<T>
{
  /**
   * Technical entity name for InfoManagements.
   */
  static override _entityName = 'InfoManagements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InfoManagements entity.
   */
  static _keys = ['Name', 'LocationId'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Location Id.
   */
  declare locationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Commissionarate.
   * @nullable
   */
  declare commissionarate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Registration Type.
   * @nullable
   */
  declare registrationType?: TaxRegistrationTypeIn | null;
  /**
   * Large Taxpayer Unit Code.
   * @nullable
   */
  declare largeTaxpayerUnitCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Registration Number.
   * @nullable
   */
  declare salesTaxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Account Number.
   * @nullable
   */
  declare taxAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iec Number.
   * @nullable
   */
  declare iecNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Num Seq Group.
   * @nullable
   */
  declare numSeqGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gst Number.
   * @nullable
   */
  declare gstNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ecc Number Others.
   * @nullable
   */
  declare eccNumberOthers?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manufacturer Ecc Number.
   * @nullable
   */
  declare manufacturerEccNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stc Number.
   * @nullable
   */
  declare stcNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Range.
   * @nullable
   */
  declare range?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trader Ecc Number.
   * @nullable
   */
  declare traderEccNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * @nullable
   */
  declare division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Identification Number.
   * @nullable
   */
  declare taxIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InfoManagementsApi<T>) {
    super(_entityApi);
  }
}

export interface InfoManagementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  locationId: DeserializedType<T, 'Edm.String'>;
  isPrimary?: NoYes | null;
  commissionarate?: DeserializedType<T, 'Edm.String'> | null;
  registrationType?: TaxRegistrationTypeIn | null;
  largeTaxpayerUnitCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  taxAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  iecNumber?: DeserializedType<T, 'Edm.String'> | null;
  numSeqGroup?: DeserializedType<T, 'Edm.String'> | null;
  gstNumber?: DeserializedType<T, 'Edm.String'> | null;
  eccNumberOthers?: DeserializedType<T, 'Edm.String'> | null;
  manufacturerEccNumber?: DeserializedType<T, 'Edm.String'> | null;
  stcNumber?: DeserializedType<T, 'Edm.String'> | null;
  range?: DeserializedType<T, 'Edm.String'> | null;
  traderEccNumber?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  taxIdentificationNumber?: DeserializedType<T, 'Edm.String'> | null;
}
