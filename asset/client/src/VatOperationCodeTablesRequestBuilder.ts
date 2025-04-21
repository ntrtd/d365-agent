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
import { VatOperationCodeTables } from './VatOperationCodeTables';

/**
 * Request builder class for operations supported on the {@link VatOperationCodeTables} entity.
 */
export class VatOperationCodeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VatOperationCodeTables<T>, T> {
  /**
   * Returns a request builder for querying all `VatOperationCodeTables` entities.
   * @returns A request builder for creating requests to retrieve all `VatOperationCodeTables` entities.
   */
  getAll(): GetAllRequestBuilder<VatOperationCodeTables<T>, T> {
    return new GetAllRequestBuilder<VatOperationCodeTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VatOperationCodeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VatOperationCodeTables`.
   */
  create(
    entity: VatOperationCodeTables<T>
  ): CreateRequestBuilder<VatOperationCodeTables<T>, T> {
    return new CreateRequestBuilder<VatOperationCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VatOperationCodeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link VatOperationCodeTables.dataAreaId}.
   * @param vatOperationCode Key property. See {@link VatOperationCodeTables.vatOperationCode}.
   * @returns A request builder for creating requests to retrieve one `VatOperationCodeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vatOperationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VatOperationCodeTables<T>, T> {
    return new GetByKeyRequestBuilder<VatOperationCodeTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VATOperationCode: vatOperationCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VatOperationCodeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VatOperationCodeTables`.
   */
  update(
    entity: VatOperationCodeTables<T>
  ): UpdateRequestBuilder<VatOperationCodeTables<T>, T> {
    return new UpdateRequestBuilder<VatOperationCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VatOperationCodeTables`.
   * @param dataAreaId Key property. See {@link VatOperationCodeTables.dataAreaId}.
   * @param vatOperationCode Key property. See {@link VatOperationCodeTables.vatOperationCode}.
   * @returns A request builder for creating requests that delete an entity of type `VatOperationCodeTables`.
   */
  delete(
    dataAreaId: string,
    vatOperationCode: string
  ): DeleteRequestBuilder<VatOperationCodeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VatOperationCodeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VatOperationCodeTables` by taking the entity as a parameter.
   */
  delete(
    entity: VatOperationCodeTables<T>
  ): DeleteRequestBuilder<VatOperationCodeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vatOperationCode?: string
  ): DeleteRequestBuilder<VatOperationCodeTables<T>, T> {
    return new DeleteRequestBuilder<VatOperationCodeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VatOperationCodeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VATOperationCode: vatOperationCode!
          }
    );
  }
}
