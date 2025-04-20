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
import { SalesRebateAgreementHeadersV2 } from './SalesRebateAgreementHeadersV2';

/**
 * Request builder class for operations supported on the {@link SalesRebateAgreementHeadersV2} entity.
 */
export class SalesRebateAgreementHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesRebateAgreementHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `SalesRebateAgreementHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `SalesRebateAgreementHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<SalesRebateAgreementHeadersV2<T>, T> {
    return new GetAllRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesRebateAgreementHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesRebateAgreementHeadersV2`.
   */
  create(
    entity: SalesRebateAgreementHeadersV2<T>
  ): CreateRequestBuilder<SalesRebateAgreementHeadersV2<T>, T> {
    return new CreateRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesRebateAgreementHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesRebateAgreementHeadersV2.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link SalesRebateAgreementHeadersV2.rebateAgreementId}.
   * @returns A request builder for creating requests to retrieve one `SalesRebateAgreementHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rebateAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesRebateAgreementHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RebateAgreementId: rebateAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesRebateAgreementHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesRebateAgreementHeadersV2`.
   */
  update(
    entity: SalesRebateAgreementHeadersV2<T>
  ): UpdateRequestBuilder<SalesRebateAgreementHeadersV2<T>, T> {
    return new UpdateRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesRebateAgreementHeadersV2`.
   * @param dataAreaId Key property. See {@link SalesRebateAgreementHeadersV2.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link SalesRebateAgreementHeadersV2.rebateAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesRebateAgreementHeadersV2`.
   */
  delete(
    dataAreaId: string,
    rebateAgreementId: string
  ): DeleteRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesRebateAgreementHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesRebateAgreementHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: SalesRebateAgreementHeadersV2<T>
  ): DeleteRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateAgreementId?: string
  ): DeleteRequestBuilder<SalesRebateAgreementHeadersV2<T>, T> {
    return new DeleteRequestBuilder<SalesRebateAgreementHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesRebateAgreementHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RebateAgreementId: rebateAgreementId!
          }
    );
  }
}
