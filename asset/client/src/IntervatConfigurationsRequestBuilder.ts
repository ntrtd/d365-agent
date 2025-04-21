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
import { IntervatConfigurations } from './IntervatConfigurations';
import { TaxIntervatElement } from './TaxIntervatElement';

/**
 * Request builder class for operations supported on the {@link IntervatConfigurations} entity.
 */
export class IntervatConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntervatConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `IntervatConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `IntervatConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<IntervatConfigurations<T>, T> {
    return new GetAllRequestBuilder<IntervatConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntervatConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntervatConfigurations`.
   */
  create(
    entity: IntervatConfigurations<T>
  ): CreateRequestBuilder<IntervatConfigurations<T>, T> {
    return new CreateRequestBuilder<IntervatConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntervatConfigurations` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntervatConfigurations.dataAreaId}.
   * @param language Key property. See {@link IntervatConfigurations.language}.
   * @returns A request builder for creating requests to retrieve one `IntervatConfigurations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxIntervatElement'
    >
  ): GetByKeyRequestBuilder<IntervatConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<IntervatConfigurations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntervatConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntervatConfigurations`.
   */
  update(
    entity: IntervatConfigurations<T>
  ): UpdateRequestBuilder<IntervatConfigurations<T>, T> {
    return new UpdateRequestBuilder<IntervatConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntervatConfigurations`.
   * @param dataAreaId Key property. See {@link IntervatConfigurations.dataAreaId}.
   * @param language Key property. See {@link IntervatConfigurations.language}.
   * @returns A request builder for creating requests that delete an entity of type `IntervatConfigurations`.
   */
  delete(
    dataAreaId: string,
    language: TaxIntervatElement
  ): DeleteRequestBuilder<IntervatConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntervatConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntervatConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: IntervatConfigurations<T>
  ): DeleteRequestBuilder<IntervatConfigurations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    language?: TaxIntervatElement
  ): DeleteRequestBuilder<IntervatConfigurations<T>, T> {
    return new DeleteRequestBuilder<IntervatConfigurations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntervatConfigurations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Language: language!
          }
    );
  }
}
