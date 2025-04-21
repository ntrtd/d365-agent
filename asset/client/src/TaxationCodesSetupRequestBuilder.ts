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
import { TaxationCodesSetup } from './TaxationCodesSetup';
import { TaxTypeBr } from './TaxTypeBr';

/**
 * Request builder class for operations supported on the {@link TaxationCodesSetup} entity.
 */
export class TaxationCodesSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxationCodesSetup<T>, T> {
  /**
   * Returns a request builder for querying all `TaxationCodesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `TaxationCodesSetup` entities.
   */
  getAll(): GetAllRequestBuilder<TaxationCodesSetup<T>, T> {
    return new GetAllRequestBuilder<TaxationCodesSetup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxationCodesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxationCodesSetup`.
   */
  create(
    entity: TaxationCodesSetup<T>
  ): CreateRequestBuilder<TaxationCodesSetup<T>, T> {
    return new CreateRequestBuilder<TaxationCodesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxationCodesSetup` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxationCodesSetup.dataAreaId}.
   * @param taxType Key property. See {@link TaxationCodesSetup.taxType}.
   * @returns A request builder for creating requests to retrieve one `TaxationCodesSetup` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.TaxType_BR'>
  ): GetByKeyRequestBuilder<TaxationCodesSetup<T>, T> {
    return new GetByKeyRequestBuilder<TaxationCodesSetup<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxType: taxType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxationCodesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxationCodesSetup`.
   */
  update(
    entity: TaxationCodesSetup<T>
  ): UpdateRequestBuilder<TaxationCodesSetup<T>, T> {
    return new UpdateRequestBuilder<TaxationCodesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxationCodesSetup`.
   * @param dataAreaId Key property. See {@link TaxationCodesSetup.dataAreaId}.
   * @param taxType Key property. See {@link TaxationCodesSetup.taxType}.
   * @returns A request builder for creating requests that delete an entity of type `TaxationCodesSetup`.
   */
  delete(
    dataAreaId: string,
    taxType: TaxTypeBr
  ): DeleteRequestBuilder<TaxationCodesSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxationCodesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxationCodesSetup` by taking the entity as a parameter.
   */
  delete(
    entity: TaxationCodesSetup<T>
  ): DeleteRequestBuilder<TaxationCodesSetup<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxType?: TaxTypeBr
  ): DeleteRequestBuilder<TaxationCodesSetup<T>, T> {
    return new DeleteRequestBuilder<TaxationCodesSetup<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxationCodesSetup
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxType: taxType!
          }
    );
  }
}
