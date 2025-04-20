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
import type { BudgetPlanWorksheetsApi } from './BudgetPlanWorksheetsApi';
import { NoYes } from './NoYes';
import { BudgetClass } from './BudgetClass';

/**
 * This class represents the entity "BudgetPlanWorksheets" of service "d365_metadata".
 */
export class BudgetPlanWorksheets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanWorksheetsType<T>
{
  /**
   * Technical entity name for BudgetPlanWorksheets.
   */
  static override _entityName = 'BudgetPlanWorksheets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanWorksheets entity.
   */
  static _keys = ['DocumentNumber', 'LineNumber', 'Layout'];
  /**
   * Document Number.
   */
  declare documentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Layout.
   */
  declare layout: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Currency Amount 2.
   */
  declare transactionCurrencyAmount2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 3.
   * @nullable
   */
  declare dimensionName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Code.
   * @nullable
   */
  declare transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 33.
   */
  declare transactionCurrencyAmount33: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 32.
   */
  declare transactionCurrencyAmount32: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 31.
   */
  declare transactionCurrencyAmount31: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 30.
   */
  declare transactionCurrencyAmount30: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 36.
   */
  declare transactionCurrencyAmount36: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 35.
   */
  declare transactionCurrencyAmount35: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 9.
   * @nullable
   */
  declare dimensionName9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 34.
   */
  declare transactionCurrencyAmount34: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposed Asset Description.
   * @nullable
   */
  declare proposedAssetDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Id.
   * @nullable
   */
  declare positionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 11.
   */
  declare quantity11: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 31.
   */
  declare quantity31: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 21.
   */
  declare quantity21: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 6.
   * @nullable
   */
  declare dimensionName6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 17.
   */
  declare quantity17: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Data Area Id.
   * @nullable
   */
  declare sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 27.
   */
  declare quantity27: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 19.
   */
  declare transactionCurrencyAmount19: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 18.
   */
  declare transactionCurrencyAmount18: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 2.
   * @nullable
   */
  declare dimensionName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 13.
   */
  declare transactionCurrencyAmount13: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 12.
   */
  declare transactionCurrencyAmount12: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 11.
   */
  declare transactionCurrencyAmount11: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 10.
   */
  declare transactionCurrencyAmount10: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 17.
   */
  declare transactionCurrencyAmount17: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Id.
   * @nullable
   */
  declare assetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 16.
   */
  declare transactionCurrencyAmount16: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 15.
   */
  declare transactionCurrencyAmount15: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 14.
   */
  declare transactionCurrencyAmount14: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 13.
   */
  declare quantity13: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 33.
   */
  declare quantity33: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 23.
   */
  declare quantity23: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 5.
   */
  declare quantity5: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 4.
   */
  declare quantity4: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 7.
   */
  declare quantity7: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 6.
   */
  declare quantity6: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 1.
   */
  declare quantity1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 3.
   */
  declare quantity3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 2.
   */
  declare quantity2: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 9.
   */
  declare quantity9: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 8.
   */
  declare quantity8: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 16.
   */
  declare quantity16: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 36.
   */
  declare quantity36: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 26.
   */
  declare quantity26: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Value 11.
   * @nullable
   */
  declare dimensionValue11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 7.
   */
  declare transactionCurrencyAmount7: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 8.
   */
  declare transactionCurrencyAmount8: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 4.
   * @nullable
   */
  declare dimensionName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id Description.
   * @nullable
   */
  declare projectIdDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 1.
   * @nullable
   */
  declare dimensionValue1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 3.
   * @nullable
   */
  declare dimensionValue3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 2.
   * @nullable
   */
  declare dimensionValue2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 5.
   * @nullable
   */
  declare dimensionValue5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 4.
   * @nullable
   */
  declare dimensionValue4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 7.
   * @nullable
   */
  declare dimensionValue7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 6.
   * @nullable
   */
  declare dimensionValue6?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 9.
   * @nullable
   */
  declare dimensionValue9?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value 8.
   * @nullable
   */
  declare dimensionValue8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 12.
   */
  declare quantity12: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 32.
   */
  declare quantity32: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 22.
   */
  declare quantity22: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 3.
   */
  declare transactionCurrencyAmount3: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 18.
   */
  declare quantity18: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 28.
   */
  declare quantity28: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 5.
   */
  declare transactionCurrencyAmount5: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposed Project Description.
   * @nullable
   */
  declare proposedProjectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is New Request.
   * @nullable
   */
  declare isNewRequest?: NoYes | null;
  /**
   * Quantity 14.
   */
  declare quantity14: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 34.
   */
  declare quantity34: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 24.
   */
  declare quantity24: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 1.
   */
  declare transactionCurrencyAmount1: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Description.
   * @nullable
   */
  declare positionDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 29.
   */
  declare transactionCurrencyAmount29: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 28.
   */
  declare transactionCurrencyAmount28: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Budget Class.
   * @nullable
   */
  declare budgetClass?: BudgetClass | null;
  /**
   * Transaction Currency Amount 23.
   */
  declare transactionCurrencyAmount23: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 22.
   */
  declare transactionCurrencyAmount22: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 21.
   */
  declare transactionCurrencyAmount21: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 20.
   */
  declare transactionCurrencyAmount20: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 27.
   */
  declare transactionCurrencyAmount27: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 26.
   */
  declare transactionCurrencyAmount26: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 25.
   */
  declare transactionCurrencyAmount25: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 8.
   * @nullable
   */
  declare dimensionName8?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 24.
   */
  declare transactionCurrencyAmount24: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Asset Id Description.
   * @nullable
   */
  declare assetIdDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 10.
   */
  declare quantity10: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 30.
   */
  declare quantity30: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 20.
   */
  declare quantity20: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency Amount 4.
   */
  declare transactionCurrencyAmount4: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proposed Asset Name.
   * @nullable
   */
  declare proposedAssetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proposed Project Name.
   * @nullable
   */
  declare proposedProjectName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 9.
   */
  declare transactionCurrencyAmount9: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Position Worker Name.
   * @nullable
   */
  declare positionWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name 5.
   * @nullable
   */
  declare dimensionName5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name 11.
   * @nullable
   */
  declare dimensionName11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name 10.
   * @nullable
   */
  declare dimensionName10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name 1.
   * @nullable
   */
  declare dimensionName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 19.
   */
  declare quantity19: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Recurring.
   * @nullable
   */
  declare isRecurring?: NoYes | null;
  /**
   * Quantity 29.
   */
  declare quantity29: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Value 10.
   * @nullable
   */
  declare dimensionValue10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount 6.
   */
  declare transactionCurrencyAmount6: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Dimension Name 7.
   * @nullable
   */
  declare dimensionName7?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity 15.
   */
  declare quantity15: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 35.
   */
  declare quantity35: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity 25.
   */
  declare quantity25: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: BudgetPlanWorksheetsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanWorksheetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  documentNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  layout: DeserializedType<T, 'Edm.String'>;
  transactionCurrencyAmount2: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName3?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount33: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount32: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount31: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount30: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount36: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount35: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName9?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount34: DeserializedType<T, 'Edm.Decimal'>;
  proposedAssetDescription?: DeserializedType<T, 'Edm.String'> | null;
  positionId?: DeserializedType<T, 'Edm.String'> | null;
  quantity11: DeserializedType<T, 'Edm.Decimal'>;
  quantity31: DeserializedType<T, 'Edm.Decimal'>;
  quantity21: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName6?: DeserializedType<T, 'Edm.String'> | null;
  quantity17: DeserializedType<T, 'Edm.Decimal'>;
  sourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  quantity27: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount19: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount18: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName2?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount13: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount12: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount11: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount10: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount17: DeserializedType<T, 'Edm.Decimal'>;
  assetId?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount16: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount15: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount14: DeserializedType<T, 'Edm.Decimal'>;
  quantity13: DeserializedType<T, 'Edm.Decimal'>;
  quantity33: DeserializedType<T, 'Edm.Decimal'>;
  quantity23: DeserializedType<T, 'Edm.Decimal'>;
  quantity5: DeserializedType<T, 'Edm.Decimal'>;
  quantity4: DeserializedType<T, 'Edm.Decimal'>;
  quantity7: DeserializedType<T, 'Edm.Decimal'>;
  quantity6: DeserializedType<T, 'Edm.Decimal'>;
  quantity1: DeserializedType<T, 'Edm.Decimal'>;
  quantity3: DeserializedType<T, 'Edm.Decimal'>;
  quantity2: DeserializedType<T, 'Edm.Decimal'>;
  quantity9: DeserializedType<T, 'Edm.Decimal'>;
  quantity8: DeserializedType<T, 'Edm.Decimal'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  quantity16: DeserializedType<T, 'Edm.Decimal'>;
  quantity36: DeserializedType<T, 'Edm.Decimal'>;
  quantity26: DeserializedType<T, 'Edm.Decimal'>;
  dimensionValue11?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount7: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount8: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName4?: DeserializedType<T, 'Edm.String'> | null;
  projectIdDescription?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue1?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue3?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue2?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue5?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue4?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue7?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue6?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue9?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValue8?: DeserializedType<T, 'Edm.String'> | null;
  quantity12: DeserializedType<T, 'Edm.Decimal'>;
  quantity32: DeserializedType<T, 'Edm.Decimal'>;
  quantity22: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount3: DeserializedType<T, 'Edm.Decimal'>;
  quantity18: DeserializedType<T, 'Edm.Decimal'>;
  quantity28: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount5: DeserializedType<T, 'Edm.Decimal'>;
  proposedProjectDescription?: DeserializedType<T, 'Edm.String'> | null;
  isNewRequest?: NoYes | null;
  quantity14: DeserializedType<T, 'Edm.Decimal'>;
  quantity34: DeserializedType<T, 'Edm.Decimal'>;
  quantity24: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount1: DeserializedType<T, 'Edm.Decimal'>;
  positionDescription?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount29: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount28: DeserializedType<T, 'Edm.Decimal'>;
  budgetClass?: BudgetClass | null;
  transactionCurrencyAmount23: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount22: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount21: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount20: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount27: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount26: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount25: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName8?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount24: DeserializedType<T, 'Edm.Decimal'>;
  assetIdDescription?: DeserializedType<T, 'Edm.String'> | null;
  quantity10: DeserializedType<T, 'Edm.Decimal'>;
  quantity30: DeserializedType<T, 'Edm.Decimal'>;
  quantity20: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrencyAmount4: DeserializedType<T, 'Edm.Decimal'>;
  proposedAssetName?: DeserializedType<T, 'Edm.String'> | null;
  proposedProjectName?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount9: DeserializedType<T, 'Edm.Decimal'>;
  positionWorkerName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName5?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName11?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName10?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName1?: DeserializedType<T, 'Edm.String'> | null;
  quantity19: DeserializedType<T, 'Edm.Decimal'>;
  isRecurring?: NoYes | null;
  quantity29: DeserializedType<T, 'Edm.Decimal'>;
  dimensionValue10?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount6: DeserializedType<T, 'Edm.Decimal'>;
  dimensionName7?: DeserializedType<T, 'Edm.String'> | null;
  quantity15: DeserializedType<T, 'Edm.Decimal'>;
  quantity35: DeserializedType<T, 'Edm.Decimal'>;
  quantity25: DeserializedType<T, 'Edm.Decimal'>;
}
