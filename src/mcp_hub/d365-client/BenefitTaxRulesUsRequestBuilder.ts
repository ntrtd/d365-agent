/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BenefitTaxRulesUs } from './BenefitTaxRulesUs';

/**
 * Request builder class for operations supported on the {@link BenefitTaxRulesUs} entity.
 */
export class BenefitTaxRulesUsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitTaxRulesUs<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitTaxRulesUs` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitTaxRulesUs` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitTaxRulesUs<T>, T> {
    return new GetAllRequestBuilder<BenefitTaxRulesUs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitTaxRulesUs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitTaxRulesUs`.
   */
  create(
    entity: BenefitTaxRulesUs<T>
  ): CreateRequestBuilder<BenefitTaxRulesUs<T>, T> {
    return new CreateRequestBuilder<BenefitTaxRulesUs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitTaxRulesUs` entity based on its keys.
   * @param benefitPlanId Key property. See {@link BenefitTaxRulesUs.benefitPlanId}.
   * @returns A request builder for creating requests to retrieve one `BenefitTaxRulesUs` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitTaxRulesUs<T>, T> {
    return new GetByKeyRequestBuilder<BenefitTaxRulesUs<T>, T>(this.entityApi, {
      BenefitPlanID: benefitPlanId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitTaxRulesUs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitTaxRulesUs`.
   */
  update(
    entity: BenefitTaxRulesUs<T>
  ): UpdateRequestBuilder<BenefitTaxRulesUs<T>, T> {
    return new UpdateRequestBuilder<BenefitTaxRulesUs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitTaxRulesUs`.
   * @param benefitPlanId Key property. See {@link BenefitTaxRulesUs.benefitPlanId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitTaxRulesUs`.
   */
  delete(benefitPlanId: string): DeleteRequestBuilder<BenefitTaxRulesUs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitTaxRulesUs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitTaxRulesUs` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitTaxRulesUs<T>
  ): DeleteRequestBuilder<BenefitTaxRulesUs<T>, T>;
  delete(
    benefitPlanIdOrEntity: any
  ): DeleteRequestBuilder<BenefitTaxRulesUs<T>, T> {
    return new DeleteRequestBuilder<BenefitTaxRulesUs<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof BenefitTaxRulesUs
        ? benefitPlanIdOrEntity
        : { BenefitPlanID: benefitPlanIdOrEntity! }
    );
  }
}
