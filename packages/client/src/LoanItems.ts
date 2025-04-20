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
import type { LoanItemsApi } from './LoanItemsApi';
import { HrmLoanItemTax } from './HrmLoanItemTax';
import { Workers, WorkersType } from './Workers';
import { LoanTypes, LoanTypesType } from './LoanTypes';
import { LoanedEquipments, LoanedEquipmentsType } from './LoanedEquipments';

/**
 * This class represents the entity "LoanItems" of service "d365_metadata".
 */
export class LoanItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LoanItemsType<T>
{
  /**
   * Technical entity name for LoanItems.
   */
  static override _entityName = 'LoanItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LoanItems entity.
   */
  static _keys = ['LoanItemId'];
  /**
   * Loan Item Id.
   */
  declare loanItemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Serial Number.
   * @nullable
   */
  declare serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person In Charge.
   * @nullable
   */
  declare personInCharge?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Grace Period Days.
   */
  declare gracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Reporting.
   * @nullable
   */
  declare taxReporting?: HrmLoanItemTax | null;
  /**
   * Loan Days.
   */
  declare loanDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Loan Type Id.
   * @nullable
   */
  declare loanTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link LoanTypes} entity.
   */
  declare loanType?: LoanTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link LoanedEquipments} entity.
   */
  declare loanedEquipments: LoanedEquipments<T>[];

  constructor(_entityApi: LoanItemsApi<T>) {
    super(_entityApi);
  }
}

export interface LoanItemsType<T extends DeSerializers = DefaultDeSerializers> {
  loanItemId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  serialNumber?: DeserializedType<T, 'Edm.String'> | null;
  personInCharge?: DeserializedType<T, 'Edm.String'> | null;
  gracePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  taxReporting?: HrmLoanItemTax | null;
  loanDays: DeserializedType<T, 'Edm.Int32'>;
  loanTypeId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
  loanType?: LoanTypesType<T> | null;
  loanedEquipments: LoanedEquipmentsType<T>[];
}
