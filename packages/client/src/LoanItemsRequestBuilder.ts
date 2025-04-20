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
import { LoanItems } from './LoanItems';

/**
 * Request builder class for operations supported on the {@link LoanItems} entity.
 */
export class LoanItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoanItems<T>, T> {
  /**
   * Returns a request builder for querying all `LoanItems` entities.
   * @returns A request builder for creating requests to retrieve all `LoanItems` entities.
   */
  getAll(): GetAllRequestBuilder<LoanItems<T>, T> {
    return new GetAllRequestBuilder<LoanItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoanItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoanItems`.
   */
  create(entity: LoanItems<T>): CreateRequestBuilder<LoanItems<T>, T> {
    return new CreateRequestBuilder<LoanItems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LoanItems` entity based on its keys.
   * @param loanItemId Key property. See {@link LoanItems.loanItemId}.
   * @returns A request builder for creating requests to retrieve one `LoanItems` entity based on its keys.
   */
  getByKey(
    loanItemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoanItems<T>, T> {
    return new GetByKeyRequestBuilder<LoanItems<T>, T>(this.entityApi, {
      LoanItemId: loanItemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoanItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoanItems`.
   */
  update(entity: LoanItems<T>): UpdateRequestBuilder<LoanItems<T>, T> {
    return new UpdateRequestBuilder<LoanItems<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LoanItems`.
   * @param loanItemId Key property. See {@link LoanItems.loanItemId}.
   * @returns A request builder for creating requests that delete an entity of type `LoanItems`.
   */
  delete(loanItemId: string): DeleteRequestBuilder<LoanItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoanItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoanItems` by taking the entity as a parameter.
   */
  delete(entity: LoanItems<T>): DeleteRequestBuilder<LoanItems<T>, T>;
  delete(loanItemIdOrEntity: any): DeleteRequestBuilder<LoanItems<T>, T> {
    return new DeleteRequestBuilder<LoanItems<T>, T>(
      this.entityApi,
      loanItemIdOrEntity instanceof LoanItems
        ? loanItemIdOrEntity
        : { LoanItemId: loanItemIdOrEntity! }
    );
  }
}
