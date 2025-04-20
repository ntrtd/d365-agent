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
import { DefaultDescriptionParameters } from './DefaultDescriptionParameters';
import { LedgerTransTxt } from './LedgerTransTxt';

/**
 * Request builder class for operations supported on the {@link DefaultDescriptionParameters} entity.
 */
export class DefaultDescriptionParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefaultDescriptionParameters<T>, T> {
  /**
   * Returns a request builder for querying all `DefaultDescriptionParameters` entities.
   * @returns A request builder for creating requests to retrieve all `DefaultDescriptionParameters` entities.
   */
  getAll(): GetAllRequestBuilder<DefaultDescriptionParameters<T>, T> {
    return new GetAllRequestBuilder<DefaultDescriptionParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DefaultDescriptionParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefaultDescriptionParameters`.
   */
  create(
    entity: DefaultDescriptionParameters<T>
  ): CreateRequestBuilder<DefaultDescriptionParameters<T>, T> {
    return new CreateRequestBuilder<DefaultDescriptionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DefaultDescriptionParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link DefaultDescriptionParameters.dataAreaId}.
   * @param description Key property. See {@link DefaultDescriptionParameters.description}.
   * @param language Key property. See {@link DefaultDescriptionParameters.language}.
   * @param parameterNumber Key property. See {@link DefaultDescriptionParameters.parameterNumber}.
   * @returns A request builder for creating requests to retrieve one `DefaultDescriptionParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    description: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerTransTxt'
    >,
    language: DeserializedType<T, 'Edm.String'>,
    parameterNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DefaultDescriptionParameters<T>, T> {
    return new GetByKeyRequestBuilder<DefaultDescriptionParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Description: description,
        Language: language,
        ParameterNumber: parameterNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DefaultDescriptionParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefaultDescriptionParameters`.
   */
  update(
    entity: DefaultDescriptionParameters<T>
  ): UpdateRequestBuilder<DefaultDescriptionParameters<T>, T> {
    return new UpdateRequestBuilder<DefaultDescriptionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefaultDescriptionParameters`.
   * @param dataAreaId Key property. See {@link DefaultDescriptionParameters.dataAreaId}.
   * @param description Key property. See {@link DefaultDescriptionParameters.description}.
   * @param language Key property. See {@link DefaultDescriptionParameters.language}.
   * @param parameterNumber Key property. See {@link DefaultDescriptionParameters.parameterNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DefaultDescriptionParameters`.
   */
  delete(
    dataAreaId: string,
    description: LedgerTransTxt,
    language: string,
    parameterNumber: number
  ): DeleteRequestBuilder<DefaultDescriptionParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefaultDescriptionParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefaultDescriptionParameters` by taking the entity as a parameter.
   */
  delete(
    entity: DefaultDescriptionParameters<T>
  ): DeleteRequestBuilder<DefaultDescriptionParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    description?: LedgerTransTxt,
    language?: string,
    parameterNumber?: number
  ): DeleteRequestBuilder<DefaultDescriptionParameters<T>, T> {
    return new DeleteRequestBuilder<DefaultDescriptionParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DefaultDescriptionParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Description: description!,
            Language: language!,
            ParameterNumber: parameterNumber!
          }
    );
  }
}
