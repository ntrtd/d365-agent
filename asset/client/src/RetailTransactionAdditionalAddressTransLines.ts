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
import type { RetailTransactionAdditionalAddressTransLinesApi } from './RetailTransactionAdditionalAddressTransLinesApi';
import { RetailAdditionalAddressType } from './RetailAdditionalAddressType';

/**
 * This class represents the entity "RetailTransactionAdditionalAddressTransLines" of service "d365_metadata".
 */
export class RetailTransactionAdditionalAddressTransLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAdditionalAddressTransLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAdditionalAddressTransLines.
   */
  static override _entityName = 'RetailTransactionAdditionalAddressTransLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAdditionalAddressTransLines entity.
   */
  static _keys = [
    'dataAreaId',
    'OperatingUnitNumber',
    'Terminal',
    'TransactionId',
    'AddressType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Type.
   * @nullable
   */
  declare addressType?: RetailAdditionalAddressType | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention To Address Line.
   * @nullable
   */
  declare attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone.
   * @nullable
   */
  declare phone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
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
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Email Content.
   * @nullable
   */
  declare emailContent?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionAdditionalAddressTransLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAdditionalAddressTransLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  addressType?: RetailAdditionalAddressType | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  phone?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  buildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  emailContent?: DeserializedType<T, 'Edm.String'> | null;
}
