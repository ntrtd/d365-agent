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
import type { TotalCompStatementSectionEarningsApi } from './TotalCompStatementSectionEarningsApi';
import { PayrollEarningCodeEarningGroupType } from './PayrollEarningCodeEarningGroupType';
import {
  TotalCompStatementSectionsHeader,
  TotalCompStatementSectionsHeaderType
} from './TotalCompStatementSectionsHeader';
import { EarningCodeGroups, EarningCodeGroupsType } from './EarningCodeGroups';

/**
 * This class represents the entity "TotalCompStatementSectionEarnings" of service "d365_metadata".
 */
export class TotalCompStatementSectionEarnings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TotalCompStatementSectionEarningsType<T>
{
  /**
   * Technical entity name for TotalCompStatementSectionEarnings.
   */
  static override _entityName = 'TotalCompStatementSectionEarnings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TotalCompStatementSectionEarnings entity.
   */
  static _keys = ['StatementSectionId', 'EarningCodeGroupId', 'EarningCodeId'];
  /**
   * Statement Section Id.
   */
  declare statementSectionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Group Id.
   */
  declare earningCodeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Id.
   */
  declare earningCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Earning Code Or Group Type.
   * @nullable
   */
  declare earningCodeOrGroupType?: PayrollEarningCodeEarningGroupType | null;
  /**
   * One-to-one navigation property to the {@link TotalCompStatementSectionsHeader} entity.
   */
  declare hcmTotalCompStatementSectionHeaderEntity?: TotalCompStatementSectionsHeader<T> | null;
  /**
   * One-to-one navigation property to the {@link EarningCodeGroups} entity.
   */
  declare payrollEarningCodeGroupEntity?: EarningCodeGroups<T> | null;

  constructor(_entityApi: TotalCompStatementSectionEarningsApi<T>) {
    super(_entityApi);
  }
}

export interface TotalCompStatementSectionEarningsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statementSectionId: DeserializedType<T, 'Edm.String'>;
  earningCodeGroupId: DeserializedType<T, 'Edm.String'>;
  earningCodeId: DeserializedType<T, 'Edm.String'>;
  earningCodeOrGroupType?: PayrollEarningCodeEarningGroupType | null;
  hcmTotalCompStatementSectionHeaderEntity?: TotalCompStatementSectionsHeaderType<T> | null;
  payrollEarningCodeGroupEntity?: EarningCodeGroupsType<T> | null;
}
