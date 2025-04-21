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
import { VendorRebateAgreementHeaders } from './VendorRebateAgreementHeaders';

/**
 * Request builder class for operations supported on the {@link VendorRebateAgreementHeaders} entity.
 */
export class VendorRebateAgreementHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorRebateAgreementHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `VendorRebateAgreementHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `VendorRebateAgreementHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<VendorRebateAgreementHeaders<T>, T> {
    return new GetAllRequestBuilder<VendorRebateAgreementHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorRebateAgreementHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorRebateAgreementHeaders`.
   */
  create(
    entity: VendorRebateAgreementHeaders<T>
  ): CreateRequestBuilder<VendorRebateAgreementHeaders<T>, T> {
    return new CreateRequestBuilder<VendorRebateAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorRebateAgreementHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementHeaders.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementHeaders.rebateAgreementId}.
   * @returns A request builder for creating requests to retrieve one `VendorRebateAgreementHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rebateAgreementId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorRebateAgreementHeaders<T>, T> {
    return new GetByKeyRequestBuilder<VendorRebateAgreementHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RebateAgreementId: rebateAgreementId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorRebateAgreementHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorRebateAgreementHeaders`.
   */
  update(
    entity: VendorRebateAgreementHeaders<T>
  ): UpdateRequestBuilder<VendorRebateAgreementHeaders<T>, T> {
    return new UpdateRequestBuilder<VendorRebateAgreementHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementHeaders`.
   * @param dataAreaId Key property. See {@link VendorRebateAgreementHeaders.dataAreaId}.
   * @param rebateAgreementId Key property. See {@link VendorRebateAgreementHeaders.rebateAgreementId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementHeaders`.
   */
  delete(
    dataAreaId: string,
    rebateAgreementId: string
  ): DeleteRequestBuilder<VendorRebateAgreementHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorRebateAgreementHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorRebateAgreementHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: VendorRebateAgreementHeaders<T>
  ): DeleteRequestBuilder<VendorRebateAgreementHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rebateAgreementId?: string
  ): DeleteRequestBuilder<VendorRebateAgreementHeaders<T>, T> {
    return new DeleteRequestBuilder<VendorRebateAgreementHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorRebateAgreementHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RebateAgreementId: rebateAgreementId!
          }
    );
  }
}
