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
import type { BenefitsLifeEventOptionsApi } from './BenefitsLifeEventOptionsApi';
import { NoYes } from './NoYes';
import {
  BenefitsLifeEventTypes,
  BenefitsLifeEventTypesType
} from './BenefitsLifeEventTypes';
import { BenefitsPlanTypes, BenefitsPlanTypesType } from './BenefitsPlanTypes';

/**
 * This class represents the entity "BenefitsLifeEventOptions" of service "d365_metadata".
 */
export class BenefitsLifeEventOptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BenefitsLifeEventOptionsType<T>
{
  /**
   * Technical entity name for BenefitsLifeEventOptions.
   */
  static override _entityName = 'BenefitsLifeEventOptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BenefitsLifeEventOptions entity.
   */
  static _keys = ['PlanTypeId', 'LifeEventTypeId'];
  /**
   * Plan Type Id.
   */
  declare planTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Event Type Id.
   */
  declare lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Change To New Plan.
   * @nullable
   */
  declare changeToNewPlan?: NoYes | null;
  /**
   * Prevent Removing Flex Credits From Allocation.
   * @nullable
   */
  declare preventRemovingFlexCreditsFromAllocation?: NoYes | null;
  /**
   * Prevent Additions To Flex Credits Allocation.
   * @nullable
   */
  declare preventAdditionsToFlexCreditsAllocation?: NoYes | null;
  /**
   * Auto Cancel Plan.
   * @nullable
   */
  declare autoCancelPlan?: NoYes | null;
  /**
   * Open Flex Credits Allocation.
   * @nullable
   */
  declare openFlexCreditsAllocation?: NoYes | null;
  /**
   * Allow Cancellation.
   * @nullable
   */
  declare allowCancellation?: NoYes | null;
  /**
   * Auto Re Open Eligibility Check.
   * @nullable
   */
  declare autoReOpenEligibilityCheck?: NoYes | null;
  /**
   * Change Coverage Option.
   * @nullable
   */
  declare changeCoverageOption?: NoYes | null;
  /**
   * Life Event Reporting Window.
   */
  declare lifeEventReportingWindow: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link BenefitsLifeEventTypes} entity.
   */
  declare benefitsLifeEventType?: BenefitsLifeEventTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link BenefitsPlanTypes} entity.
   */
  declare benefitsPlanType?: BenefitsPlanTypes<T> | null;

  constructor(_entityApi: BenefitsLifeEventOptionsApi<T>) {
    super(_entityApi);
  }
}

export interface BenefitsLifeEventOptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  planTypeId: DeserializedType<T, 'Edm.String'>;
  lifeEventTypeId: DeserializedType<T, 'Edm.String'>;
  changeToNewPlan?: NoYes | null;
  preventRemovingFlexCreditsFromAllocation?: NoYes | null;
  preventAdditionsToFlexCreditsAllocation?: NoYes | null;
  autoCancelPlan?: NoYes | null;
  openFlexCreditsAllocation?: NoYes | null;
  allowCancellation?: NoYes | null;
  autoReOpenEligibilityCheck?: NoYes | null;
  changeCoverageOption?: NoYes | null;
  lifeEventReportingWindow: DeserializedType<T, 'Edm.Int32'>;
  benefitsLifeEventType?: BenefitsLifeEventTypesType<T> | null;
  benefitsPlanType?: BenefitsPlanTypesType<T> | null;
}
