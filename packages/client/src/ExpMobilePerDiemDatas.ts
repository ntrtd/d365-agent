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
import type { ExpMobilePerDiemDatasApi } from './ExpMobilePerDiemDatasApi';
import { TrvFirstLastBoth } from './TrvFirstLastBoth';

/**
 * This class represents the entity "ExpMobilePerDiemDatas" of service "d365_metadata".
 */
export class ExpMobilePerDiemDatas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpMobilePerDiemDatasType<T>
{
  /**
   * Technical entity name for ExpMobilePerDiemDatas.
   */
  static override _entityName = 'ExpMobilePerDiemDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpMobilePerDiemDatas entity.
   */
  static _keys = ['dataAreaId', 'EntRecId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ent Rec Id.
   */
  declare entRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Number Of Hrs Day.
   */
  declare numberOfHrsDay: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type Of Date.
   * @nullable
   */
  declare typeOfDate?: TrvFirstLastBoth | null;
  /**
   * Number Of Breakfast.
   */
  declare numberOfBreakfast: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Exchange Code.
   * @nullable
   */
  declare exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Mealsand Incidentals Mst.
   */
  declare mealsandIncidentalsMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trv Exp Trans.
   */
  declare trvExpTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Number Of Lunch.
   */
  declare numberOfLunch: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Data Area Id.
   * @nullable
   */
  declare referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Dinner.
   */
  declare numberOfDinner: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Creating Worker.
   */
  declare creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Exp Trans Number.
   * @nullable
   */
  declare expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Meal Deduction.
   */
  declare mealDeduction: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ExpMobilePerDiemDatasApi<T>) {
    super(_entityApi);
  }
}

export interface ExpMobilePerDiemDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  entRecId: DeserializedType<T, 'Edm.Int64'>;
  numberOfHrsDay: DeserializedType<T, 'Edm.Decimal'>;
  typeOfDate?: TrvFirstLastBoth | null;
  numberOfBreakfast: DeserializedType<T, 'Edm.Int32'>;
  exchangeCode?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity: DeserializedType<T, 'Edm.Int64'>;
  mealsandIncidentalsMst: DeserializedType<T, 'Edm.Decimal'>;
  trvExpTrans: DeserializedType<T, 'Edm.Int64'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  numberOfLunch: DeserializedType<T, 'Edm.Int32'>;
  referenceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  numberOfDinner: DeserializedType<T, 'Edm.Int32'>;
  creatingWorker: DeserializedType<T, 'Edm.Int64'>;
  expTransNumber?: DeserializedType<T, 'Edm.String'> | null;
  mealDeduction: DeserializedType<T, 'Edm.Decimal'>;
}
