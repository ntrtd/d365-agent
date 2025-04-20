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
import { McrUpSellCrossSellVariables } from './McrUpSellCrossSellVariables';

/**
 * Request builder class for operations supported on the {@link McrUpSellCrossSellVariables} entity.
 */
export class McrUpSellCrossSellVariablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrUpSellCrossSellVariables<T>, T> {
  /**
   * Returns a request builder for querying all `McrUpSellCrossSellVariables` entities.
   * @returns A request builder for creating requests to retrieve all `McrUpSellCrossSellVariables` entities.
   */
  getAll(): GetAllRequestBuilder<McrUpSellCrossSellVariables<T>, T> {
    return new GetAllRequestBuilder<McrUpSellCrossSellVariables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrUpSellCrossSellVariables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrUpSellCrossSellVariables`.
   */
  create(
    entity: McrUpSellCrossSellVariables<T>
  ): CreateRequestBuilder<McrUpSellCrossSellVariables<T>, T> {
    return new CreateRequestBuilder<McrUpSellCrossSellVariables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrUpSellCrossSellVariables` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrUpSellCrossSellVariables.dataAreaId}.
   * @param variableName Key property. See {@link McrUpSellCrossSellVariables.variableName}.
   * @returns A request builder for creating requests to retrieve one `McrUpSellCrossSellVariables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    variableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<McrUpSellCrossSellVariables<T>, T> {
    return new GetByKeyRequestBuilder<McrUpSellCrossSellVariables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VariableName: variableName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrUpSellCrossSellVariables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrUpSellCrossSellVariables`.
   */
  update(
    entity: McrUpSellCrossSellVariables<T>
  ): UpdateRequestBuilder<McrUpSellCrossSellVariables<T>, T> {
    return new UpdateRequestBuilder<McrUpSellCrossSellVariables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrUpSellCrossSellVariables`.
   * @param dataAreaId Key property. See {@link McrUpSellCrossSellVariables.dataAreaId}.
   * @param variableName Key property. See {@link McrUpSellCrossSellVariables.variableName}.
   * @returns A request builder for creating requests that delete an entity of type `McrUpSellCrossSellVariables`.
   */
  delete(
    dataAreaId: string,
    variableName: string
  ): DeleteRequestBuilder<McrUpSellCrossSellVariables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrUpSellCrossSellVariables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrUpSellCrossSellVariables` by taking the entity as a parameter.
   */
  delete(
    entity: McrUpSellCrossSellVariables<T>
  ): DeleteRequestBuilder<McrUpSellCrossSellVariables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    variableName?: string
  ): DeleteRequestBuilder<McrUpSellCrossSellVariables<T>, T> {
    return new DeleteRequestBuilder<McrUpSellCrossSellVariables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrUpSellCrossSellVariables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VariableName: variableName!
          }
    );
  }
}
