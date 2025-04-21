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
import type { FundsApi } from './FundsApi';
import { NoYes } from './NoYes';
import { FundClassValue } from './FundClassValue';
import { LedgerFundYearEndOption } from './LedgerFundYearEndOption';

/**
 * This class represents the entity "Funds" of service "d365_metadata".
 */
export class Funds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FundsType<T>
{
  /**
   * Technical entity name for Funds.
   */
  static override _entityName = 'Funds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Funds entity.
   */
  static _keys = ['dataAreaId', 'FundNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fund Number.
   */
  declare fundNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Major.
   * @nullable
   */
  declare isMajor?: NoYes | null;
  /**
   * Fund Class.
   * @nullable
   */
  declare fundClass?: FundClassValue | null;
  /**
   * Fund Name.
   * @nullable
   */
  declare fundName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Year End Option.
   * @nullable
   */
  declare yearEndOption?: LedgerFundYearEndOption | null;
  /**
   * Override Year End Option.
   * @nullable
   */
  declare overrideYearEndOption?: NoYes | null;
  /**
   * Fund Type.
   * @nullable
   */
  declare fundType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Non Reporting Fund.
   * @nullable
   */
  declare isNonReportingFund?: NoYes | null;
  /**
   * Psn Treasurer Fund Report.
   * @nullable
   */
  declare psnTreasurerFundReport?: NoYes | null;

  constructor(_entityApi: FundsApi<T>) {
    super(_entityApi);
  }
}

export interface FundsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fundNumber: DeserializedType<T, 'Edm.String'>;
  isMajor?: NoYes | null;
  fundClass?: FundClassValue | null;
  fundName?: DeserializedType<T, 'Edm.String'> | null;
  yearEndOption?: LedgerFundYearEndOption | null;
  overrideYearEndOption?: NoYes | null;
  fundType?: DeserializedType<T, 'Edm.String'> | null;
  isNonReportingFund?: NoYes | null;
  psnTreasurerFundReport?: NoYes | null;
}
