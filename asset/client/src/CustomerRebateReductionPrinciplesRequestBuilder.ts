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
import { CustomerRebateReductionPrinciples } from './CustomerRebateReductionPrinciples';

/**
 * Request builder class for operations supported on the {@link CustomerRebateReductionPrinciples} entity.
 */
export class CustomerRebateReductionPrinciplesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerRebateReductionPrinciples<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerRebateReductionPrinciples` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerRebateReductionPrinciples` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerRebateReductionPrinciples<T>, T> {
    return new GetAllRequestBuilder<CustomerRebateReductionPrinciples<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerRebateReductionPrinciples` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerRebateReductionPrinciples`.
   */
  create(
    entity: CustomerRebateReductionPrinciples<T>
  ): CreateRequestBuilder<CustomerRebateReductionPrinciples<T>, T> {
    return new CreateRequestBuilder<CustomerRebateReductionPrinciples<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerRebateReductionPrinciples` entity based on its keys.
   * @param principleId Key property. See {@link CustomerRebateReductionPrinciples.principleId}.
   * @returns A request builder for creating requests to retrieve one `CustomerRebateReductionPrinciples` entity based on its keys.
   */
  getByKey(
    principleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerRebateReductionPrinciples<T>, T> {
    return new GetByKeyRequestBuilder<CustomerRebateReductionPrinciples<T>, T>(
      this.entityApi,
      { PrincipleId: principleId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerRebateReductionPrinciples`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerRebateReductionPrinciples`.
   */
  update(
    entity: CustomerRebateReductionPrinciples<T>
  ): UpdateRequestBuilder<CustomerRebateReductionPrinciples<T>, T> {
    return new UpdateRequestBuilder<CustomerRebateReductionPrinciples<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerRebateReductionPrinciples`.
   * @param principleId Key property. See {@link CustomerRebateReductionPrinciples.principleId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebateReductionPrinciples`.
   */
  delete(
    principleId: string
  ): DeleteRequestBuilder<CustomerRebateReductionPrinciples<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerRebateReductionPrinciples`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerRebateReductionPrinciples` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerRebateReductionPrinciples<T>
  ): DeleteRequestBuilder<CustomerRebateReductionPrinciples<T>, T>;
  delete(
    principleIdOrEntity: any
  ): DeleteRequestBuilder<CustomerRebateReductionPrinciples<T>, T> {
    return new DeleteRequestBuilder<CustomerRebateReductionPrinciples<T>, T>(
      this.entityApi,
      principleIdOrEntity instanceof CustomerRebateReductionPrinciples
        ? principleIdOrEntity
        : { PrincipleId: principleIdOrEntity! }
    );
  }
}
