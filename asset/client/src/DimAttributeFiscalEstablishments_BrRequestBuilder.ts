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
import { DimAttributeFiscalEstablishments_Br } from './DimAttributeFiscalEstablishments_Br';

/**
 * Request builder class for operations supported on the {@link DimAttributeFiscalEstablishments_Br} entity.
 */
export class DimAttributeFiscalEstablishments_BrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeFiscalEstablishments_Br` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeFiscalEstablishments_Br` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T> {
    return new GetAllRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeFiscalEstablishments_Br` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeFiscalEstablishments_Br`.
   */
  create(
    entity: DimAttributeFiscalEstablishments_Br<T>
  ): CreateRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T> {
    return new CreateRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeFiscalEstablishments_Br` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimAttributeFiscalEstablishments_Br.dataAreaId}.
   * @param value Key property. See {@link DimAttributeFiscalEstablishments_Br.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeFiscalEstablishments_Br` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T> {
    return new GetByKeyRequestBuilder<
      DimAttributeFiscalEstablishments_Br<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Value: value
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeFiscalEstablishments_Br`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeFiscalEstablishments_Br`.
   */
  update(
    entity: DimAttributeFiscalEstablishments_Br<T>
  ): UpdateRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T> {
    return new UpdateRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeFiscalEstablishments_Br`.
   * @param dataAreaId Key property. See {@link DimAttributeFiscalEstablishments_Br.dataAreaId}.
   * @param value Key property. See {@link DimAttributeFiscalEstablishments_Br.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeFiscalEstablishments_Br`.
   */
  delete(
    dataAreaId: string,
    value: string
  ): DeleteRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeFiscalEstablishments_Br`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeFiscalEstablishments_Br` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeFiscalEstablishments_Br<T>
  ): DeleteRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    value?: string
  ): DeleteRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T> {
    return new DeleteRequestBuilder<DimAttributeFiscalEstablishments_Br<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimAttributeFiscalEstablishments_Br
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Value: value!
          }
    );
  }
}
