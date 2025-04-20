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
import type { ExpenseZipcodesApi } from './ExpenseZipcodesApi';
import { AllEvenOdd } from './AllEvenOdd';
import { Timezone } from './Timezone';

/**
 * This class represents the entity "ExpenseZipcodes" of service "d365_metadata".
 */
export class ExpenseZipcodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExpenseZipcodesType<T>
{
  /**
   * Technical entity name for ExpenseZipcodes.
   */
  static override _entityName = 'ExpenseZipcodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseZipcodes entity.
   */
  static _keys = ['ZipCode'];
  /**
   * Zip Code.
   */
  declare zipCode: DeserializedType<T, 'Edm.String'>;
  /**
   * City Alias.
   * @nullable
   */
  declare cityAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Even Odd.
   * @nullable
   */
  declare evenOdd?: AllEvenOdd | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   */
  declare district: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Num.
   */
  declare toNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Time Zone.
   * @nullable
   */
  declare timeZone?: Timezone | null;
  /**
   * City Rec Id.
   */
  declare cityRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Zipcode Rec Id.
   */
  declare zipcodeRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Street Name.
   * @nullable
   */
  declare streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Num.
   */
  declare fromNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExpenseZipcodesApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseZipcodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  zipCode: DeserializedType<T, 'Edm.String'>;
  cityAlias?: DeserializedType<T, 'Edm.String'> | null;
  evenOdd?: AllEvenOdd | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  district: DeserializedType<T, 'Edm.Int64'>;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  toNum: DeserializedType<T, 'Edm.Int32'>;
  timeZone?: Timezone | null;
  cityRecId: DeserializedType<T, 'Edm.Int64'>;
  zipcodeRecId: DeserializedType<T, 'Edm.Int64'>;
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  fromNum: DeserializedType<T, 'Edm.Int32'>;
  city?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
}
