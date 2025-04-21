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
import { BenefitTypes } from './BenefitTypes';

/**
 * Request builder class for operations supported on the {@link BenefitTypes} entity.
 */
export class BenefitTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitTypes<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitTypes` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitTypes` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitTypes<T>, T> {
    return new GetAllRequestBuilder<BenefitTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitTypes`.
   */
  create(entity: BenefitTypes<T>): CreateRequestBuilder<BenefitTypes<T>, T> {
    return new CreateRequestBuilder<BenefitTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BenefitTypes` entity based on its keys.
   * @param benefitTypeId Key property. See {@link BenefitTypes.benefitTypeId}.
   * @returns A request builder for creating requests to retrieve one `BenefitTypes` entity based on its keys.
   */
  getByKey(
    benefitTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitTypes<T>, T> {
    return new GetByKeyRequestBuilder<BenefitTypes<T>, T>(this.entityApi, {
      BenefitTypeId: benefitTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitTypes`.
   */
  update(entity: BenefitTypes<T>): UpdateRequestBuilder<BenefitTypes<T>, T> {
    return new UpdateRequestBuilder<BenefitTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitTypes`.
   * @param benefitTypeId Key property. See {@link BenefitTypes.benefitTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitTypes`.
   */
  delete(benefitTypeId: string): DeleteRequestBuilder<BenefitTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitTypes` by taking the entity as a parameter.
   */
  delete(entity: BenefitTypes<T>): DeleteRequestBuilder<BenefitTypes<T>, T>;
  delete(benefitTypeIdOrEntity: any): DeleteRequestBuilder<BenefitTypes<T>, T> {
    return new DeleteRequestBuilder<BenefitTypes<T>, T>(
      this.entityApi,
      benefitTypeIdOrEntity instanceof BenefitTypes
        ? benefitTypeIdOrEntity
        : { BenefitTypeId: benefitTypeIdOrEntity! }
    );
  }
}
