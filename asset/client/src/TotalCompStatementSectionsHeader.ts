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
import type { TotalCompStatementSectionsHeaderApi } from './TotalCompStatementSectionsHeaderApi';
import {
  TotalCompStatementSectionTaxes,
  TotalCompStatementSectionTaxesType
} from './TotalCompStatementSectionTaxes';
import {
  TotalCompStatementSectionEarnings,
  TotalCompStatementSectionEarningsType
} from './TotalCompStatementSectionEarnings';
import {
  TotalCompStatementSectionBenefits,
  TotalCompStatementSectionBenefitsType
} from './TotalCompStatementSectionBenefits';

/**
 * This class represents the entity "TotalCompStatementSectionsHeader" of service "d365_metadata".
 */
export class TotalCompStatementSectionsHeader<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TotalCompStatementSectionsHeaderType<T>
{
  /**
   * Technical entity name for TotalCompStatementSectionsHeader.
   */
  static override _entityName = 'TotalCompStatementSectionsHeader';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TotalCompStatementSectionsHeader entity.
   */
  static _keys = ['StatementSectionId'];
  /**
   * Statement Section Id.
   */
  declare statementSectionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Statement Section Name.
   * @nullable
   */
  declare statementSectionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TotalCompStatementSectionTaxes} entity.
   */
  declare totalCompStatementSectionTax: TotalCompStatementSectionTaxes<T>[];
  /**
   * One-to-many navigation property to the {@link TotalCompStatementSectionEarnings} entity.
   */
  declare totalCompStatementSectionEarning: TotalCompStatementSectionEarnings<T>[];
  /**
   * One-to-many navigation property to the {@link TotalCompStatementSectionBenefits} entity.
   */
  declare totalCompStatementSectionBenefit: TotalCompStatementSectionBenefits<T>[];

  constructor(_entityApi: TotalCompStatementSectionsHeaderApi<T>) {
    super(_entityApi);
  }
}

export interface TotalCompStatementSectionsHeaderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statementSectionId: DeserializedType<T, 'Edm.String'>;
  statementSectionName?: DeserializedType<T, 'Edm.String'> | null;
  totalCompStatementSectionTax: TotalCompStatementSectionTaxesType<T>[];
  totalCompStatementSectionEarning: TotalCompStatementSectionEarningsType<T>[];
  totalCompStatementSectionBenefit: TotalCompStatementSectionBenefitsType<T>[];
}
