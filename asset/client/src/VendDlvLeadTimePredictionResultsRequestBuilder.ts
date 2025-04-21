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
import { VendDlvLeadTimePredictionResults } from './VendDlvLeadTimePredictionResults';

/**
 * Request builder class for operations supported on the {@link VendDlvLeadTimePredictionResults} entity.
 */
export class VendDlvLeadTimePredictionResultsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendDlvLeadTimePredictionResults<T>, T> {
  /**
   * Returns a request builder for querying all `VendDlvLeadTimePredictionResults` entities.
   * @returns A request builder for creating requests to retrieve all `VendDlvLeadTimePredictionResults` entities.
   */
  getAll(): GetAllRequestBuilder<VendDlvLeadTimePredictionResults<T>, T> {
    return new GetAllRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendDlvLeadTimePredictionResults` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendDlvLeadTimePredictionResults`.
   */
  create(
    entity: VendDlvLeadTimePredictionResults<T>
  ): CreateRequestBuilder<VendDlvLeadTimePredictionResults<T>, T> {
    return new CreateRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendDlvLeadTimePredictionResults` entity based on its keys.
   * @param hashKey Key property. See {@link VendDlvLeadTimePredictionResults.hashKey}.
   * @returns A request builder for creating requests to retrieve one `VendDlvLeadTimePredictionResults` entity based on its keys.
   */
  getByKey(
    hashKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendDlvLeadTimePredictionResults<T>, T> {
    return new GetByKeyRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>(
      this.entityApi,
      { HashKey: hashKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendDlvLeadTimePredictionResults`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendDlvLeadTimePredictionResults`.
   */
  update(
    entity: VendDlvLeadTimePredictionResults<T>
  ): UpdateRequestBuilder<VendDlvLeadTimePredictionResults<T>, T> {
    return new UpdateRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendDlvLeadTimePredictionResults`.
   * @param hashKey Key property. See {@link VendDlvLeadTimePredictionResults.hashKey}.
   * @returns A request builder for creating requests that delete an entity of type `VendDlvLeadTimePredictionResults`.
   */
  delete(
    hashKey: string
  ): DeleteRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendDlvLeadTimePredictionResults`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendDlvLeadTimePredictionResults` by taking the entity as a parameter.
   */
  delete(
    entity: VendDlvLeadTimePredictionResults<T>
  ): DeleteRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>;
  delete(
    hashKeyOrEntity: any
  ): DeleteRequestBuilder<VendDlvLeadTimePredictionResults<T>, T> {
    return new DeleteRequestBuilder<VendDlvLeadTimePredictionResults<T>, T>(
      this.entityApi,
      hashKeyOrEntity instanceof VendDlvLeadTimePredictionResults
        ? hashKeyOrEntity
        : { HashKey: hashKeyOrEntity! }
    );
  }
}
