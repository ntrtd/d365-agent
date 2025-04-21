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
import { ElectronicAddressRoles } from './ElectronicAddressRoles';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';

/**
 * Request builder class for operations supported on the {@link ElectronicAddressRoles} entity.
 */
export class ElectronicAddressRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicAddressRoles<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicAddressRoles` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicAddressRoles` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicAddressRoles<T>, T> {
    return new GetAllRequestBuilder<ElectronicAddressRoles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicAddressRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicAddressRoles`.
   */
  create(
    entity: ElectronicAddressRoles<T>
  ): CreateRequestBuilder<ElectronicAddressRoles<T>, T> {
    return new CreateRequestBuilder<ElectronicAddressRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicAddressRoles` entity based on its keys.
   * @param logisticsLocationRoleFkName Key property. See {@link ElectronicAddressRoles.logisticsLocationRoleFkName}.
   * @param type Key property. See {@link ElectronicAddressRoles.type}.
   * @param electronicAddressId Key property. See {@link ElectronicAddressRoles.electronicAddressId}.
   * @returns A request builder for creating requests to retrieve one `ElectronicAddressRoles` entity based on its keys.
   */
  getByKey(
    logisticsLocationRoleFkName: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LogisticsElectronicAddressMethodType'
    >,
    electronicAddressId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicAddressRoles<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicAddressRoles<T>, T>(
      this.entityApi,
      {
        LogisticsLocationRole_FK_Name: logisticsLocationRoleFkName,
        Type: type,
        ElectronicAddressId: electronicAddressId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicAddressRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicAddressRoles`.
   */
  update(
    entity: ElectronicAddressRoles<T>
  ): UpdateRequestBuilder<ElectronicAddressRoles<T>, T> {
    return new UpdateRequestBuilder<ElectronicAddressRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicAddressRoles`.
   * @param logisticsLocationRoleFkName Key property. See {@link ElectronicAddressRoles.logisticsLocationRoleFkName}.
   * @param type Key property. See {@link ElectronicAddressRoles.type}.
   * @param electronicAddressId Key property. See {@link ElectronicAddressRoles.electronicAddressId}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicAddressRoles`.
   */
  delete(
    logisticsLocationRoleFkName: string,
    type: LogisticsElectronicAddressMethodType,
    electronicAddressId: string
  ): DeleteRequestBuilder<ElectronicAddressRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicAddressRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicAddressRoles` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicAddressRoles<T>
  ): DeleteRequestBuilder<ElectronicAddressRoles<T>, T>;
  delete(
    logisticsLocationRoleFkNameOrEntity: any,
    type?: LogisticsElectronicAddressMethodType,
    electronicAddressId?: string
  ): DeleteRequestBuilder<ElectronicAddressRoles<T>, T> {
    return new DeleteRequestBuilder<ElectronicAddressRoles<T>, T>(
      this.entityApi,
      logisticsLocationRoleFkNameOrEntity instanceof ElectronicAddressRoles
        ? logisticsLocationRoleFkNameOrEntity
        : {
            LogisticsLocationRole_FK_Name: logisticsLocationRoleFkNameOrEntity!,
            Type: type!,
            ElectronicAddressId: electronicAddressId!
          }
    );
  }
}
