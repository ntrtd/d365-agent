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
import { BenefitPlanDefaultDimensions } from './BenefitPlanDefaultDimensions';

/**
 * Request builder class for operations supported on the {@link BenefitPlanDefaultDimensions} entity.
 */
export class BenefitPlanDefaultDimensionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitPlanDefaultDimensions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitPlanDefaultDimensions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitPlanDefaultDimensions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitPlanDefaultDimensions<T>, T> {
    return new GetAllRequestBuilder<BenefitPlanDefaultDimensions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitPlanDefaultDimensions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitPlanDefaultDimensions`.
   */
  create(
    entity: BenefitPlanDefaultDimensions<T>
  ): CreateRequestBuilder<BenefitPlanDefaultDimensions<T>, T> {
    return new CreateRequestBuilder<BenefitPlanDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitPlanDefaultDimensions` entity based on its keys.
   * @param benefitPlanId Key property. See {@link BenefitPlanDefaultDimensions.benefitPlanId}.
   * @param legalEntityId Key property. See {@link BenefitPlanDefaultDimensions.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `BenefitPlanDefaultDimensions` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitPlanDefaultDimensions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitPlanDefaultDimensions<T>, T>(
      this.entityApi,
      {
        BenefitPlanId: benefitPlanId,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitPlanDefaultDimensions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitPlanDefaultDimensions`.
   */
  update(
    entity: BenefitPlanDefaultDimensions<T>
  ): UpdateRequestBuilder<BenefitPlanDefaultDimensions<T>, T> {
    return new UpdateRequestBuilder<BenefitPlanDefaultDimensions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitPlanDefaultDimensions`.
   * @param benefitPlanId Key property. See {@link BenefitPlanDefaultDimensions.benefitPlanId}.
   * @param legalEntityId Key property. See {@link BenefitPlanDefaultDimensions.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPlanDefaultDimensions`.
   */
  delete(
    benefitPlanId: string,
    legalEntityId: string
  ): DeleteRequestBuilder<BenefitPlanDefaultDimensions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitPlanDefaultDimensions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitPlanDefaultDimensions` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitPlanDefaultDimensions<T>
  ): DeleteRequestBuilder<BenefitPlanDefaultDimensions<T>, T>;
  delete(
    benefitPlanIdOrEntity: any,
    legalEntityId?: string
  ): DeleteRequestBuilder<BenefitPlanDefaultDimensions<T>, T> {
    return new DeleteRequestBuilder<BenefitPlanDefaultDimensions<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof BenefitPlanDefaultDimensions
        ? benefitPlanIdOrEntity
        : {
            BenefitPlanId: benefitPlanIdOrEntity!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
