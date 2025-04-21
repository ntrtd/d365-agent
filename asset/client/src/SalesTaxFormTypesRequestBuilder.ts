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
import { SalesTaxFormTypes } from './SalesTaxFormTypes';

/**
 * Request builder class for operations supported on the {@link SalesTaxFormTypes} entity.
 */
export class SalesTaxFormTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxFormTypes<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTaxFormTypes` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxFormTypes` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxFormTypes<T>, T> {
    return new GetAllRequestBuilder<SalesTaxFormTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTaxFormTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxFormTypes`.
   */
  create(
    entity: SalesTaxFormTypes<T>
  ): CreateRequestBuilder<SalesTaxFormTypes<T>, T> {
    return new CreateRequestBuilder<SalesTaxFormTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTaxFormTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTaxFormTypes.dataAreaId}.
   * @param formType Key property. See {@link SalesTaxFormTypes.formType}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxFormTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    formType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesTaxFormTypes<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxFormTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FormType: formType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxFormTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxFormTypes`.
   */
  update(
    entity: SalesTaxFormTypes<T>
  ): UpdateRequestBuilder<SalesTaxFormTypes<T>, T> {
    return new UpdateRequestBuilder<SalesTaxFormTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxFormTypes`.
   * @param dataAreaId Key property. See {@link SalesTaxFormTypes.dataAreaId}.
   * @param formType Key property. See {@link SalesTaxFormTypes.formType}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxFormTypes`.
   */
  delete(
    dataAreaId: string,
    formType: string
  ): DeleteRequestBuilder<SalesTaxFormTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxFormTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxFormTypes` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxFormTypes<T>
  ): DeleteRequestBuilder<SalesTaxFormTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    formType?: string
  ): DeleteRequestBuilder<SalesTaxFormTypes<T>, T> {
    return new DeleteRequestBuilder<SalesTaxFormTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTaxFormTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FormType: formType!
          }
    );
  }
}
