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
import { DeliveryModesV2 } from './DeliveryModesV2';

/**
 * Request builder class for operations supported on the {@link DeliveryModesV2} entity.
 */
export class DeliveryModesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryModesV2<T>, T> {
  /**
   * Returns a request builder for querying all `DeliveryModesV2` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryModesV2` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryModesV2<T>, T> {
    return new GetAllRequestBuilder<DeliveryModesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeliveryModesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryModesV2`.
   */
  create(
    entity: DeliveryModesV2<T>
  ): CreateRequestBuilder<DeliveryModesV2<T>, T> {
    return new CreateRequestBuilder<DeliveryModesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeliveryModesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeliveryModesV2.dataAreaId}.
   * @param modeCode Key property. See {@link DeliveryModesV2.modeCode}.
   * @returns A request builder for creating requests to retrieve one `DeliveryModesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    modeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeliveryModesV2<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryModesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ModeCode: modeCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryModesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryModesV2`.
   */
  update(
    entity: DeliveryModesV2<T>
  ): UpdateRequestBuilder<DeliveryModesV2<T>, T> {
    return new UpdateRequestBuilder<DeliveryModesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryModesV2`.
   * @param dataAreaId Key property. See {@link DeliveryModesV2.dataAreaId}.
   * @param modeCode Key property. See {@link DeliveryModesV2.modeCode}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryModesV2`.
   */
  delete(
    dataAreaId: string,
    modeCode: string
  ): DeleteRequestBuilder<DeliveryModesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryModesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryModesV2` by taking the entity as a parameter.
   */
  delete(
    entity: DeliveryModesV2<T>
  ): DeleteRequestBuilder<DeliveryModesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    modeCode?: string
  ): DeleteRequestBuilder<DeliveryModesV2<T>, T> {
    return new DeleteRequestBuilder<DeliveryModesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeliveryModesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModeCode: modeCode!
          }
    );
  }
}
