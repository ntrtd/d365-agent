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
import { SubBillDeferralDeclinings } from './SubBillDeferralDeclinings';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralDeclinings} entity.
 */
export class SubBillDeferralDecliningsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralDeclinings<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralDeclinings` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralDeclinings` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralDeclinings<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralDeclinings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralDeclinings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralDeclinings`.
   */
  create(
    entity: SubBillDeferralDeclinings<T>
  ): CreateRequestBuilder<SubBillDeferralDeclinings<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralDeclinings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralDeclinings` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralDeclinings.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralDeclinings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralDeclinings<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralDeclinings<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralDeclinings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralDeclinings`.
   */
  update(
    entity: SubBillDeferralDeclinings<T>
  ): UpdateRequestBuilder<SubBillDeferralDeclinings<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralDeclinings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDeclinings`.
   * @param dataAreaId Key property. See {@link SubBillDeferralDeclinings.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDeclinings`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<SubBillDeferralDeclinings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDeclinings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDeclinings` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralDeclinings<T>
  ): DeleteRequestBuilder<SubBillDeferralDeclinings<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<SubBillDeferralDeclinings<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralDeclinings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralDeclinings
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
