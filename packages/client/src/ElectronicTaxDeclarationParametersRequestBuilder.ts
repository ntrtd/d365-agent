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
import { ElectronicTaxDeclarationParameters } from './ElectronicTaxDeclarationParameters';

/**
 * Request builder class for operations supported on the {@link ElectronicTaxDeclarationParameters} entity.
 */
export class ElectronicTaxDeclarationParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicTaxDeclarationParameters<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicTaxDeclarationParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicTaxDeclarationParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicTaxDeclarationParameters<T>, T> {
    return new GetAllRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicTaxDeclarationParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicTaxDeclarationParameters`.
   */
  create(
    entity: ElectronicTaxDeclarationParameters<T>
  ): CreateRequestBuilder<ElectronicTaxDeclarationParameters<T>, T> {
    return new CreateRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicTaxDeclarationParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicTaxDeclarationParameters.dataAreaId}.
   * @param id Key property. See {@link ElectronicTaxDeclarationParameters.id}.
   * @returns A request builder for creating requests to retrieve one `ElectronicTaxDeclarationParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ElectronicTaxDeclarationParameters<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ID: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicTaxDeclarationParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicTaxDeclarationParameters`.
   */
  update(
    entity: ElectronicTaxDeclarationParameters<T>
  ): UpdateRequestBuilder<ElectronicTaxDeclarationParameters<T>, T> {
    return new UpdateRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicTaxDeclarationParameters`.
   * @param dataAreaId Key property. See {@link ElectronicTaxDeclarationParameters.dataAreaId}.
   * @param id Key property. See {@link ElectronicTaxDeclarationParameters.id}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicTaxDeclarationParameters`.
   */
  delete(
    dataAreaId: string,
    id: number
  ): DeleteRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicTaxDeclarationParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicTaxDeclarationParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicTaxDeclarationParameters<T>
  ): DeleteRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<ElectronicTaxDeclarationParameters<T>, T> {
    return new DeleteRequestBuilder<ElectronicTaxDeclarationParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicTaxDeclarationParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
