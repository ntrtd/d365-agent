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
import { ExtCodeTables } from './ExtCodeTables';
import { EInvoiceExtCodeTypeMx } from './EInvoiceExtCodeTypeMx';

/**
 * Request builder class for operations supported on the {@link ExtCodeTables} entity.
 */
export class ExtCodeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExtCodeTables<T>, T> {
  /**
   * Returns a request builder for querying all `ExtCodeTables` entities.
   * @returns A request builder for creating requests to retrieve all `ExtCodeTables` entities.
   */
  getAll(): GetAllRequestBuilder<ExtCodeTables<T>, T> {
    return new GetAllRequestBuilder<ExtCodeTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExtCodeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtCodeTables`.
   */
  create(entity: ExtCodeTables<T>): CreateRequestBuilder<ExtCodeTables<T>, T> {
    return new CreateRequestBuilder<ExtCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExtCodeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExtCodeTables.dataAreaId}.
   * @param codeType Key property. See {@link ExtCodeTables.codeType}.
   * @param version Key property. See {@link ExtCodeTables.version}.
   * @param codeId Key property. See {@link ExtCodeTables.codeId}.
   * @returns A request builder for creating requests to retrieve one `ExtCodeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    codeType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EInvoiceExtCodeType_MX'
    >,
    version: DeserializedType<T, 'Edm.String'>,
    codeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExtCodeTables<T>, T> {
    return new GetByKeyRequestBuilder<ExtCodeTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CodeType: codeType,
      Version: version,
      CodeId: codeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExtCodeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExtCodeTables`.
   */
  update(entity: ExtCodeTables<T>): UpdateRequestBuilder<ExtCodeTables<T>, T> {
    return new UpdateRequestBuilder<ExtCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExtCodeTables`.
   * @param dataAreaId Key property. See {@link ExtCodeTables.dataAreaId}.
   * @param codeType Key property. See {@link ExtCodeTables.codeType}.
   * @param version Key property. See {@link ExtCodeTables.version}.
   * @param codeId Key property. See {@link ExtCodeTables.codeId}.
   * @returns A request builder for creating requests that delete an entity of type `ExtCodeTables`.
   */
  delete(
    dataAreaId: string,
    codeType: EInvoiceExtCodeTypeMx,
    version: string,
    codeId: string
  ): DeleteRequestBuilder<ExtCodeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExtCodeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExtCodeTables` by taking the entity as a parameter.
   */
  delete(entity: ExtCodeTables<T>): DeleteRequestBuilder<ExtCodeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    codeType?: EInvoiceExtCodeTypeMx,
    version?: string,
    codeId?: string
  ): DeleteRequestBuilder<ExtCodeTables<T>, T> {
    return new DeleteRequestBuilder<ExtCodeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExtCodeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CodeType: codeType!,
            Version: version!,
            CodeId: codeId!
          }
    );
  }
}
