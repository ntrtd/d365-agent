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
import { DimAttributeAgreementHeaderExt_RUs } from './DimAttributeAgreementHeaderExt_RUs';

/**
 * Request builder class for operations supported on the {@link DimAttributeAgreementHeaderExt_RUs} entity.
 */
export class DimAttributeAgreementHeaderExt_RUsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeAgreementHeaderExt_RUs` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeAgreementHeaderExt_RUs` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T> {
    return new GetAllRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeAgreementHeaderExt_RUs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeAgreementHeaderExt_RUs`.
   */
  create(
    entity: DimAttributeAgreementHeaderExt_RUs<T>
  ): CreateRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T> {
    return new CreateRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeAgreementHeaderExt_RUs` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeAgreementHeaderExt_RUs.dataAreaId}.
   * @param value Key property. See {@link DimAttributeAgreementHeaderExt_RUs.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeAgreementHeaderExt_RUs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Value: value
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeAgreementHeaderExt_RUs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeAgreementHeaderExt_RUs`.
   */
  update(
    entity: DimAttributeAgreementHeaderExt_RUs<T>
  ): UpdateRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T> {
    return new UpdateRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeAgreementHeaderExt_RUs`.
   * @param dataAreaId Key property. See {@link DimAttributeAgreementHeaderExt_RUs.dataAreaId}.
   * @param value Key property. See {@link DimAttributeAgreementHeaderExt_RUs.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeAgreementHeaderExt_RUs`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeAgreementHeaderExt_RUs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeAgreementHeaderExt_RUs` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeAgreementHeaderExt_RUs<T>
  ): DeleteRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T> {
    return new DeleteRequestBuilder<DimAttributeAgreementHeaderExt_RUs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeAgreementHeaderExt_RUs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
