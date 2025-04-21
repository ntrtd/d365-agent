/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { Benefits } from './Benefits';

/**
 * Request builder class for operations supported on the {@link Benefits} entity.
 */
export class BenefitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Benefits<T>, T> {
  /**
   * Returns a request builder for querying all `Benefits` entities.
   * @returns A request builder for creating requests to retrieve all `Benefits` entities.
   */
  getAll(): GetAllRequestBuilder<Benefits<T>, T> {
    return new GetAllRequestBuilder<Benefits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Benefits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Benefits`.
   */
  create(entity: Benefits<T>): CreateRequestBuilder<Benefits<T>, T> {
    return new CreateRequestBuilder<Benefits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Benefits` entity based on its keys.
   * @param benefitPlanId Key property. See {@link Benefits.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link Benefits.benefitOptionId}.
   * @param effective Key property. See {@link Benefits.effective}.
   * @param expiration Key property. See {@link Benefits.expiration}.
   * @returns A request builder for creating requests to retrieve one `Benefits` entity based on its keys.
   */
  getByKey(
    benefitPlanId: DeserializedType<T, 'Edm.String'>,
    benefitOptionId: DeserializedType<T, 'Edm.String'>,
    effective: DeserializedType<T, 'Edm.DateTimeOffset'>,
    expiration: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<Benefits<T>, T> {
    return new GetByKeyRequestBuilder<Benefits<T>, T>(this.entityApi, {
      BenefitPlanId: benefitPlanId,
      BenefitOptionId: benefitOptionId,
      Effective: effective,
      Expiration: expiration
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Benefits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Benefits`.
   */
  update(entity: Benefits<T>): UpdateRequestBuilder<Benefits<T>, T> {
    return new UpdateRequestBuilder<Benefits<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Benefits`.
   * @param benefitPlanId Key property. See {@link Benefits.benefitPlanId}.
   * @param benefitOptionId Key property. See {@link Benefits.benefitOptionId}.
   * @param effective Key property. See {@link Benefits.effective}.
   * @param expiration Key property. See {@link Benefits.expiration}.
   * @returns A request builder for creating requests that delete an entity of type `Benefits`.
   */
  delete(
    benefitPlanId: string,
    benefitOptionId: string,
    effective: Moment,
    expiration: Moment
  ): DeleteRequestBuilder<Benefits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Benefits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Benefits` by taking the entity as a parameter.
   */
  delete(entity: Benefits<T>): DeleteRequestBuilder<Benefits<T>, T>;
  delete(
    benefitPlanIdOrEntity: any,
    benefitOptionId?: string,
    effective?: Moment,
    expiration?: Moment
  ): DeleteRequestBuilder<Benefits<T>, T> {
    return new DeleteRequestBuilder<Benefits<T>, T>(
      this.entityApi,
      benefitPlanIdOrEntity instanceof Benefits
        ? benefitPlanIdOrEntity
        : {
            BenefitPlanId: benefitPlanIdOrEntity!,
            BenefitOptionId: benefitOptionId!,
            Effective: effective!,
            Expiration: expiration!
          }
    );
  }
}
