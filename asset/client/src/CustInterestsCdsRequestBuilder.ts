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
import { CustInterestsCds } from './CustInterestsCds';

/**
 * Request builder class for operations supported on the {@link CustInterestsCds} entity.
 */
export class CustInterestsCdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustInterestsCds<T>, T> {
  /**
   * Returns a request builder for querying all `CustInterestsCds` entities.
   * @returns A request builder for creating requests to retrieve all `CustInterestsCds` entities.
   */
  getAll(): GetAllRequestBuilder<CustInterestsCds<T>, T> {
    return new GetAllRequestBuilder<CustInterestsCds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustInterestsCds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustInterestsCds`.
   */
  create(
    entity: CustInterestsCds<T>
  ): CreateRequestBuilder<CustInterestsCds<T>, T> {
    return new CreateRequestBuilder<CustInterestsCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustInterestsCds` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustInterestsCds.dataAreaId}.
   * @param interestCode Key property. See {@link CustInterestsCds.interestCode}.
   * @returns A request builder for creating requests to retrieve one `CustInterestsCds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    interestCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustInterestsCds<T>, T> {
    return new GetByKeyRequestBuilder<CustInterestsCds<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      InterestCode: interestCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustInterestsCds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustInterestsCds`.
   */
  update(
    entity: CustInterestsCds<T>
  ): UpdateRequestBuilder<CustInterestsCds<T>, T> {
    return new UpdateRequestBuilder<CustInterestsCds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustInterestsCds`.
   * @param dataAreaId Key property. See {@link CustInterestsCds.dataAreaId}.
   * @param interestCode Key property. See {@link CustInterestsCds.interestCode}.
   * @returns A request builder for creating requests that delete an entity of type `CustInterestsCds`.
   */
  delete(
    dataAreaId: string,
    interestCode: string
  ): DeleteRequestBuilder<CustInterestsCds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustInterestsCds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustInterestsCds` by taking the entity as a parameter.
   */
  delete(
    entity: CustInterestsCds<T>
  ): DeleteRequestBuilder<CustInterestsCds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    interestCode?: string
  ): DeleteRequestBuilder<CustInterestsCds<T>, T> {
    return new DeleteRequestBuilder<CustInterestsCds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustInterestsCds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InterestCode: interestCode!
          }
    );
  }
}
