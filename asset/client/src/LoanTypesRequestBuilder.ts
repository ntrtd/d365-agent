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
import { LoanTypes } from './LoanTypes';

/**
 * Request builder class for operations supported on the {@link LoanTypes} entity.
 */
export class LoanTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoanTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LoanTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LoanTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LoanTypes<T>, T> {
    return new GetAllRequestBuilder<LoanTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoanTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoanTypes`.
   */
  create(entity: LoanTypes<T>): CreateRequestBuilder<LoanTypes<T>, T> {
    return new CreateRequestBuilder<LoanTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LoanTypes` entity based on its keys.
   * @param loanTypeId Key property. See {@link LoanTypes.loanTypeId}.
   * @returns A request builder for creating requests to retrieve one `LoanTypes` entity based on its keys.
   */
  getByKey(
    loanTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoanTypes<T>, T> {
    return new GetByKeyRequestBuilder<LoanTypes<T>, T>(this.entityApi, {
      LoanTypeId: loanTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoanTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoanTypes`.
   */
  update(entity: LoanTypes<T>): UpdateRequestBuilder<LoanTypes<T>, T> {
    return new UpdateRequestBuilder<LoanTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LoanTypes`.
   * @param loanTypeId Key property. See {@link LoanTypes.loanTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LoanTypes`.
   */
  delete(loanTypeId: string): DeleteRequestBuilder<LoanTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoanTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoanTypes` by taking the entity as a parameter.
   */
  delete(entity: LoanTypes<T>): DeleteRequestBuilder<LoanTypes<T>, T>;
  delete(loanTypeIdOrEntity: any): DeleteRequestBuilder<LoanTypes<T>, T> {
    return new DeleteRequestBuilder<LoanTypes<T>, T>(
      this.entityApi,
      loanTypeIdOrEntity instanceof LoanTypes
        ? loanTypeIdOrEntity
        : { LoanTypeId: loanTypeIdOrEntity! }
    );
  }
}
