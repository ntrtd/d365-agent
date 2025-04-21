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
import type { BenefitsEssTileSetupBenefitsApi } from './BenefitsEssTileSetupBenefitsApi';
import { BenefitPlanTypeCode } from './BenefitPlanTypeCode';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BenefitsESSTileSetupBenefits" of service "d365_metadata".
 */
export class BenefitsEssTileSetupBenefits<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsEssTileSetupBenefitsType<T>
{
  /**
   * Technical entity name for BenefitsEssTileSetupBenefits.
   */
  static override _entityName = 'BenefitsESSTileSetupBenefits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsEssTileSetupBenefits entity.
   */
  static _keys = ['dataAreaId', 'TileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tile Id.
   */
  declare tileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tile Label Text.
   * @nullable
   */
  declare tileLabelText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Plan Type Code.
   * @nullable
   */
  declare benefitPlanTypeCode?: BenefitPlanTypeCode | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Track Open Enrollment Progress.
   * @nullable
   */
  declare trackOpenEnrollmentProgress?: NoYes | null;
  /**
   * Tile Background Image.
   * @nullable
   */
  declare tileBackgroundImage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BenefitsEssTileSetupBenefitsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsEssTileSetupBenefitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tileId: DeserializedType<T, 'Edm.String'>;
  tileLabelText?: DeserializedType<T, 'Edm.String'> | null;
  benefitPlanTypeCode?: BenefitPlanTypeCode | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  trackOpenEnrollmentProgress?: NoYes | null;
  tileBackgroundImage?: DeserializedType<T, 'Edm.String'> | null;
}
