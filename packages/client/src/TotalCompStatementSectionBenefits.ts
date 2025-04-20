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
import type { TotalCompStatementSectionBenefitsApi } from './TotalCompStatementSectionBenefitsApi';
import { Benefits, BenefitsType } from './Benefits';
import {
  TotalCompStatementSectionsHeader,
  TotalCompStatementSectionsHeaderType
} from './TotalCompStatementSectionsHeader';

/**
 * This class represents the entity "TotalCompStatementSectionBenefits" of service "d365_metadata".
 */
export class TotalCompStatementSectionBenefits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TotalCompStatementSectionBenefitsType<T>
{
  /**
   * Technical entity name for TotalCompStatementSectionBenefits.
   */
  static override _entityName = 'TotalCompStatementSectionBenefits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TotalCompStatementSectionBenefits entity.
   */
  static _keys = ['StatementSectionId', 'BenefitId'];
  /**
   * Statement Section Id.
   */
  declare statementSectionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Benefit Id.
   */
  declare benefitId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Benefits} entity.
   */
  declare hcmBenefitEntity?: Benefits<T> | null;
  /**
   * One-to-one navigation property to the {@link TotalCompStatementSectionsHeader} entity.
   */
  declare hcmTotalCompStatementSectionHeaderEntity?: TotalCompStatementSectionsHeader<T> | null;

  constructor(_entityApi: TotalCompStatementSectionBenefitsApi<T>) {
    super(_entityApi);
  }
}

export interface TotalCompStatementSectionBenefitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  statementSectionId: DeserializedType<T, 'Edm.String'>;
  benefitId: DeserializedType<T, 'Edm.String'>;
  hcmBenefitEntity?: BenefitsType<T> | null;
  hcmTotalCompStatementSectionHeaderEntity?: TotalCompStatementSectionsHeaderType<T> | null;
}
