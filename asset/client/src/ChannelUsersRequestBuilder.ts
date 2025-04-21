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
import { ChannelUsers } from './ChannelUsers';

/**
 * Request builder class for operations supported on the {@link ChannelUsers} entity.
 */
export class ChannelUsersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChannelUsers<T>, T> {
  /**
   * Returns a request builder for querying all `ChannelUsers` entities.
   * @returns A request builder for creating requests to retrieve all `ChannelUsers` entities.
   */
  getAll(): GetAllRequestBuilder<ChannelUsers<T>, T> {
    return new GetAllRequestBuilder<ChannelUsers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChannelUsers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChannelUsers`.
   */
  create(entity: ChannelUsers<T>): CreateRequestBuilder<ChannelUsers<T>, T> {
    return new CreateRequestBuilder<ChannelUsers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ChannelUsers` entity based on its keys.
   * @param dataAreaId Key property. See {@link ChannelUsers.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link ChannelUsers.operatingUnitNumber}.
   * @param user Key property. See {@link ChannelUsers.user}.
   * @returns A request builder for creating requests to retrieve one `ChannelUsers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    user: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ChannelUsers<T>, T> {
    return new GetByKeyRequestBuilder<ChannelUsers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      User: user
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ChannelUsers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChannelUsers`.
   */
  update(entity: ChannelUsers<T>): UpdateRequestBuilder<ChannelUsers<T>, T> {
    return new UpdateRequestBuilder<ChannelUsers<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ChannelUsers`.
   * @param dataAreaId Key property. See {@link ChannelUsers.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link ChannelUsers.operatingUnitNumber}.
   * @param user Key property. See {@link ChannelUsers.user}.
   * @returns A request builder for creating requests that delete an entity of type `ChannelUsers`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    user: string
  ): DeleteRequestBuilder<ChannelUsers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChannelUsers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChannelUsers` by taking the entity as a parameter.
   */
  delete(entity: ChannelUsers<T>): DeleteRequestBuilder<ChannelUsers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    user?: string
  ): DeleteRequestBuilder<ChannelUsers<T>, T> {
    return new DeleteRequestBuilder<ChannelUsers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ChannelUsers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            User: user!
          }
    );
  }
}
