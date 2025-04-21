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
import { Components } from './Components';
import { TaxTypeIn } from './TaxTypeIn';

/**
 * Request builder class for operations supported on the {@link Components} entity.
 */
export class ComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Components<T>, T> {
  /**
   * Returns a request builder for querying all `Components` entities.
   * @returns A request builder for creating requests to retrieve all `Components` entities.
   */
  getAll(): GetAllRequestBuilder<Components<T>, T> {
    return new GetAllRequestBuilder<Components<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Components` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Components`.
   */
  create(entity: Components<T>): CreateRequestBuilder<Components<T>, T> {
    return new CreateRequestBuilder<Components<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Components` entity based on its keys.
   * @param dataAreaId Key property. See {@link Components.dataAreaId}.
   * @param taxComponent Key property. See {@link Components.taxComponent}.
   * @param taxType Key property. See {@link Components.taxType}.
   * @returns A request builder for creating requests to retrieve one `Components` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxComponent: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.TaxType_IN'>
  ): GetByKeyRequestBuilder<Components<T>, T> {
    return new GetByKeyRequestBuilder<Components<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxComponent: taxComponent,
      TaxType: taxType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Components`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Components`.
   */
  update(entity: Components<T>): UpdateRequestBuilder<Components<T>, T> {
    return new UpdateRequestBuilder<Components<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Components`.
   * @param dataAreaId Key property. See {@link Components.dataAreaId}.
   * @param taxComponent Key property. See {@link Components.taxComponent}.
   * @param taxType Key property. See {@link Components.taxType}.
   * @returns A request builder for creating requests that delete an entity of type `Components`.
   */
  delete(
    dataAreaId: string,
    taxComponent: string,
    taxType: TaxTypeIn
  ): DeleteRequestBuilder<Components<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Components`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Components` by taking the entity as a parameter.
   */
  delete(entity: Components<T>): DeleteRequestBuilder<Components<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxComponent?: string,
    taxType?: TaxTypeIn
  ): DeleteRequestBuilder<Components<T>, T> {
    return new DeleteRequestBuilder<Components<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Components
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxComponent: taxComponent!,
            TaxType: taxType!
          }
    );
  }
}
