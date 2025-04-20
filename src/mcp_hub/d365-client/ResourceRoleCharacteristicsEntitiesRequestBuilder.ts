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
import { ResourceRoleCharacteristicsEntities } from './ResourceRoleCharacteristicsEntities';
import { ResCharacteristicSetEnum } from './ResCharacteristicSetEnum';
import { ResCharacteristicReqEntityType } from './ResCharacteristicReqEntityType';

/**
 * Request builder class for operations supported on the {@link ResourceRoleCharacteristicsEntities} entity.
 */
export class ResourceRoleCharacteristicsEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceRoleCharacteristicsEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ResourceRoleCharacteristicsEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceRoleCharacteristicsEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T> {
    return new GetAllRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ResourceRoleCharacteristicsEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceRoleCharacteristicsEntities`.
   */
  create(
    entity: ResourceRoleCharacteristicsEntities<T>
  ): CreateRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T> {
    return new CreateRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ResourceRoleCharacteristicsEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ResourceRoleCharacteristicsEntities.dataAreaId}.
   * @param characteristicId Key property. See {@link ResourceRoleCharacteristicsEntities.characteristicId}.
   * @param characteristicSet Key property. See {@link ResourceRoleCharacteristicsEntities.characteristicSet}.
   * @param roleId Key property. See {@link ResourceRoleCharacteristicsEntities.roleId}.
   * @param reqEntityType Key property. See {@link ResourceRoleCharacteristicsEntities.reqEntityType}.
   * @returns A request builder for creating requests to retrieve one `ResourceRoleCharacteristicsEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    characteristicId: DeserializedType<T, 'Edm.String'>,
    characteristicSet: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ResCharacteristicSetEnum'
    >,
    roleId: DeserializedType<T, 'Edm.String'>,
    reqEntityType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ResCharacteristicReqEntityType'
    >
  ): GetByKeyRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ResourceRoleCharacteristicsEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      CharacteristicId: characteristicId,
      CharacteristicSet: characteristicSet,
      RoleId: roleId,
      ReqEntityType: reqEntityType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceRoleCharacteristicsEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceRoleCharacteristicsEntities`.
   */
  update(
    entity: ResourceRoleCharacteristicsEntities<T>
  ): UpdateRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T> {
    return new UpdateRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceRoleCharacteristicsEntities`.
   * @param dataAreaId Key property. See {@link ResourceRoleCharacteristicsEntities.dataAreaId}.
   * @param characteristicId Key property. See {@link ResourceRoleCharacteristicsEntities.characteristicId}.
   * @param characteristicSet Key property. See {@link ResourceRoleCharacteristicsEntities.characteristicSet}.
   * @param roleId Key property. See {@link ResourceRoleCharacteristicsEntities.roleId}.
   * @param reqEntityType Key property. See {@link ResourceRoleCharacteristicsEntities.reqEntityType}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceRoleCharacteristicsEntities`.
   */
  delete(
    dataAreaId: string,
    characteristicId: string,
    characteristicSet: ResCharacteristicSetEnum,
    roleId: string,
    reqEntityType: ResCharacteristicReqEntityType
  ): DeleteRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceRoleCharacteristicsEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceRoleCharacteristicsEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ResourceRoleCharacteristicsEntities<T>
  ): DeleteRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    characteristicId?: string,
    characteristicSet?: ResCharacteristicSetEnum,
    roleId?: string,
    reqEntityType?: ResCharacteristicReqEntityType
  ): DeleteRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T> {
    return new DeleteRequestBuilder<ResourceRoleCharacteristicsEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ResourceRoleCharacteristicsEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CharacteristicId: characteristicId!,
            CharacteristicSet: characteristicSet!,
            RoleId: roleId!,
            ReqEntityType: reqEntityType!
          }
    );
  }
}
