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
import { SubBillDeferralParameters } from './SubBillDeferralParameters';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralParameters} entity.
 */
export class SubBillDeferralParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralParameters<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralParameters`.
   */
  create(
    entity: SubBillDeferralParameters<T>
  ): CreateRequestBuilder<SubBillDeferralParameters<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralParameters<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralParameters`.
   */
  update(
    entity: SubBillDeferralParameters<T>
  ): UpdateRequestBuilder<SubBillDeferralParameters<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralParameters`.
   * @param dataAreaId Key property. See {@link SubBillDeferralParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<SubBillDeferralParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralParameters<T>
  ): DeleteRequestBuilder<SubBillDeferralParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<SubBillDeferralParameters<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
