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
import { FiscalRegisterV2 } from './FiscalRegisterV2';

/**
 * Request builder class for operations supported on the {@link FiscalRegisterV2} entity.
 */
export class FiscalRegisterV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalRegisterV2<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalRegisterV2` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalRegisterV2` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalRegisterV2<T>, T> {
    return new GetAllRequestBuilder<FiscalRegisterV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalRegisterV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalRegisterV2`.
   */
  create(
    entity: FiscalRegisterV2<T>
  ): CreateRequestBuilder<FiscalRegisterV2<T>, T> {
    return new CreateRequestBuilder<FiscalRegisterV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalRegisterV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalRegisterV2.dataAreaId}.
   * @param docTypeId Key property. See {@link FiscalRegisterV2.docTypeId}.
   * @returns A request builder for creating requests to retrieve one `FiscalRegisterV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    docTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalRegisterV2<T>, T> {
    return new GetByKeyRequestBuilder<FiscalRegisterV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DocTypeId: docTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalRegisterV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalRegisterV2`.
   */
  update(
    entity: FiscalRegisterV2<T>
  ): UpdateRequestBuilder<FiscalRegisterV2<T>, T> {
    return new UpdateRequestBuilder<FiscalRegisterV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalRegisterV2`.
   * @param dataAreaId Key property. See {@link FiscalRegisterV2.dataAreaId}.
   * @param docTypeId Key property. See {@link FiscalRegisterV2.docTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalRegisterV2`.
   */
  delete(
    dataAreaId: string,
    docTypeId: string
  ): DeleteRequestBuilder<FiscalRegisterV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalRegisterV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalRegisterV2` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalRegisterV2<T>
  ): DeleteRequestBuilder<FiscalRegisterV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    docTypeId?: string
  ): DeleteRequestBuilder<FiscalRegisterV2<T>, T> {
    return new DeleteRequestBuilder<FiscalRegisterV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalRegisterV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocTypeId: docTypeId!
          }
    );
  }
}
