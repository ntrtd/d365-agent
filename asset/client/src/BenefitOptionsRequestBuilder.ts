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
import { BenefitOptions } from './BenefitOptions';

/**
 * Request builder class for operations supported on the {@link BenefitOptions} entity.
 */
export class BenefitOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitOptions<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitOptions` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitOptions` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitOptions<T>, T> {
    return new GetAllRequestBuilder<BenefitOptions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitOptions`.
   */
  create(
    entity: BenefitOptions<T>
  ): CreateRequestBuilder<BenefitOptions<T>, T> {
    return new CreateRequestBuilder<BenefitOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitOptions` entity based on its keys.
   * @param benefitOptionId Key property. See {@link BenefitOptions.benefitOptionId}.
   * @returns A request builder for creating requests to retrieve one `BenefitOptions` entity based on its keys.
   */
  getByKey(
    benefitOptionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitOptions<T>, T> {
    return new GetByKeyRequestBuilder<BenefitOptions<T>, T>(this.entityApi, {
      BenefitOptionId: benefitOptionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitOptions`.
   */
  update(
    entity: BenefitOptions<T>
  ): UpdateRequestBuilder<BenefitOptions<T>, T> {
    return new UpdateRequestBuilder<BenefitOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitOptions`.
   * @param benefitOptionId Key property. See {@link BenefitOptions.benefitOptionId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitOptions`.
   */
  delete(benefitOptionId: string): DeleteRequestBuilder<BenefitOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitOptions` by taking the entity as a parameter.
   */
  delete(entity: BenefitOptions<T>): DeleteRequestBuilder<BenefitOptions<T>, T>;
  delete(
    benefitOptionIdOrEntity: any
  ): DeleteRequestBuilder<BenefitOptions<T>, T> {
    return new DeleteRequestBuilder<BenefitOptions<T>, T>(
      this.entityApi,
      benefitOptionIdOrEntity instanceof BenefitOptions
        ? benefitOptionIdOrEntity
        : { BenefitOptionId: benefitOptionIdOrEntity! }
    );
  }
}
