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
import { TaxBenefitCodeTypes } from './TaxBenefitCodeTypes';

/**
 * Request builder class for operations supported on the {@link TaxBenefitCodeTypes} entity.
 */
export class TaxBenefitCodeTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxBenefitCodeTypes<T>, T> {
  /**
   * Returns a request builder for querying all `TaxBenefitCodeTypes` entities.
   * @returns A request builder for creating requests to retrieve all `TaxBenefitCodeTypes` entities.
   */
  getAll(): GetAllRequestBuilder<TaxBenefitCodeTypes<T>, T> {
    return new GetAllRequestBuilder<TaxBenefitCodeTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxBenefitCodeTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxBenefitCodeTypes`.
   */
  create(
    entity: TaxBenefitCodeTypes<T>
  ): CreateRequestBuilder<TaxBenefitCodeTypes<T>, T> {
    return new CreateRequestBuilder<TaxBenefitCodeTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxBenefitCodeTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxBenefitCodeTypes.dataAreaId}.
   * @param type Key property. See {@link TaxBenefitCodeTypes.type}.
   * @returns A request builder for creating requests to retrieve one `TaxBenefitCodeTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxBenefitCodeTypes<T>, T> {
    return new GetByKeyRequestBuilder<TaxBenefitCodeTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxBenefitCodeTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxBenefitCodeTypes`.
   */
  update(
    entity: TaxBenefitCodeTypes<T>
  ): UpdateRequestBuilder<TaxBenefitCodeTypes<T>, T> {
    return new UpdateRequestBuilder<TaxBenefitCodeTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxBenefitCodeTypes`.
   * @param dataAreaId Key property. See {@link TaxBenefitCodeTypes.dataAreaId}.
   * @param type Key property. See {@link TaxBenefitCodeTypes.type}.
   * @returns A request builder for creating requests that delete an entity of type `TaxBenefitCodeTypes`.
   */
  delete(
    dataAreaId: string,
    type: string
  ): DeleteRequestBuilder<TaxBenefitCodeTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxBenefitCodeTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxBenefitCodeTypes` by taking the entity as a parameter.
   */
  delete(
    entity: TaxBenefitCodeTypes<T>
  ): DeleteRequestBuilder<TaxBenefitCodeTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: string
  ): DeleteRequestBuilder<TaxBenefitCodeTypes<T>, T> {
    return new DeleteRequestBuilder<TaxBenefitCodeTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxBenefitCodeTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!
          }
    );
  }
}
