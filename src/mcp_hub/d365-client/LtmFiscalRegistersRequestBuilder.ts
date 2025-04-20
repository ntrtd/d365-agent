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
import { LtmFiscalRegisters } from './LtmFiscalRegisters';

/**
 * Request builder class for operations supported on the {@link LtmFiscalRegisters} entity.
 */
export class LtmFiscalRegistersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmFiscalRegisters<T>, T> {
  /**
   * Returns a request builder for querying all `LtmFiscalRegisters` entities.
   * @returns A request builder for creating requests to retrieve all `LtmFiscalRegisters` entities.
   */
  getAll(): GetAllRequestBuilder<LtmFiscalRegisters<T>, T> {
    return new GetAllRequestBuilder<LtmFiscalRegisters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmFiscalRegisters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmFiscalRegisters`.
   */
  create(
    entity: LtmFiscalRegisters<T>
  ): CreateRequestBuilder<LtmFiscalRegisters<T>, T> {
    return new CreateRequestBuilder<LtmFiscalRegisters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmFiscalRegisters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmFiscalRegisters.dataAreaId}.
   * @param docTypeDescription Key property. See {@link LtmFiscalRegisters.docTypeDescription}.
   * @param docTypeId Key property. See {@link LtmFiscalRegisters.docTypeId}.
   * @returns A request builder for creating requests to retrieve one `LtmFiscalRegisters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    docTypeDescription: DeserializedType<T, 'Edm.String'>,
    docTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmFiscalRegisters<T>, T> {
    return new GetByKeyRequestBuilder<LtmFiscalRegisters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DocTypeDescription: docTypeDescription,
        DocTypeId: docTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmFiscalRegisters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmFiscalRegisters`.
   */
  update(
    entity: LtmFiscalRegisters<T>
  ): UpdateRequestBuilder<LtmFiscalRegisters<T>, T> {
    return new UpdateRequestBuilder<LtmFiscalRegisters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmFiscalRegisters`.
   * @param dataAreaId Key property. See {@link LtmFiscalRegisters.dataAreaId}.
   * @param docTypeDescription Key property. See {@link LtmFiscalRegisters.docTypeDescription}.
   * @param docTypeId Key property. See {@link LtmFiscalRegisters.docTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmFiscalRegisters`.
   */
  delete(
    dataAreaId: string,
    docTypeDescription: string,
    docTypeId: string
  ): DeleteRequestBuilder<LtmFiscalRegisters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmFiscalRegisters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmFiscalRegisters` by taking the entity as a parameter.
   */
  delete(
    entity: LtmFiscalRegisters<T>
  ): DeleteRequestBuilder<LtmFiscalRegisters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    docTypeDescription?: string,
    docTypeId?: string
  ): DeleteRequestBuilder<LtmFiscalRegisters<T>, T> {
    return new DeleteRequestBuilder<LtmFiscalRegisters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmFiscalRegisters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocTypeDescription: docTypeDescription!,
            DocTypeId: docTypeId!
          }
    );
  }
}
