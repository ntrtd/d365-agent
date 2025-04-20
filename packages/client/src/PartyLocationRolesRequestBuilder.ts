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
import { PartyLocationRoles } from './PartyLocationRoles';

/**
 * Request builder class for operations supported on the {@link PartyLocationRoles} entity.
 */
export class PartyLocationRolesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PartyLocationRoles<T>, T> {
  /**
   * Returns a request builder for querying all `PartyLocationRoles` entities.
   * @returns A request builder for creating requests to retrieve all `PartyLocationRoles` entities.
   */
  getAll(): GetAllRequestBuilder<PartyLocationRoles<T>, T> {
    return new GetAllRequestBuilder<PartyLocationRoles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PartyLocationRoles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PartyLocationRoles`.
   */
  create(
    entity: PartyLocationRoles<T>
  ): CreateRequestBuilder<PartyLocationRoles<T>, T> {
    return new CreateRequestBuilder<PartyLocationRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PartyLocationRoles` entity based on its keys.
   * @param dirPartyTableFkPartyNumber Key property. See {@link PartyLocationRoles.dirPartyTableFkPartyNumber}.
   * @param logisticsLocationFkLocationId Key property. See {@link PartyLocationRoles.logisticsLocationFkLocationId}.
   * @param logisticsLocationRoleFkName Key property. See {@link PartyLocationRoles.logisticsLocationRoleFkName}.
   * @returns A request builder for creating requests to retrieve one `PartyLocationRoles` entity based on its keys.
   */
  getByKey(
    dirPartyTableFkPartyNumber: DeserializedType<T, 'Edm.String'>,
    logisticsLocationFkLocationId: DeserializedType<T, 'Edm.String'>,
    logisticsLocationRoleFkName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PartyLocationRoles<T>, T> {
    return new GetByKeyRequestBuilder<PartyLocationRoles<T>, T>(
      this.entityApi,
      {
        DirPartyTable_FK_PartyNumber: dirPartyTableFkPartyNumber,
        LogisticsLocation_FK_LocationId: logisticsLocationFkLocationId,
        LogisticsLocationRole_FK_Name: logisticsLocationRoleFkName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PartyLocationRoles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PartyLocationRoles`.
   */
  update(
    entity: PartyLocationRoles<T>
  ): UpdateRequestBuilder<PartyLocationRoles<T>, T> {
    return new UpdateRequestBuilder<PartyLocationRoles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PartyLocationRoles`.
   * @param dirPartyTableFkPartyNumber Key property. See {@link PartyLocationRoles.dirPartyTableFkPartyNumber}.
   * @param logisticsLocationFkLocationId Key property. See {@link PartyLocationRoles.logisticsLocationFkLocationId}.
   * @param logisticsLocationRoleFkName Key property. See {@link PartyLocationRoles.logisticsLocationRoleFkName}.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationRoles`.
   */
  delete(
    dirPartyTableFkPartyNumber: string,
    logisticsLocationFkLocationId: string,
    logisticsLocationRoleFkName: string
  ): DeleteRequestBuilder<PartyLocationRoles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PartyLocationRoles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PartyLocationRoles` by taking the entity as a parameter.
   */
  delete(
    entity: PartyLocationRoles<T>
  ): DeleteRequestBuilder<PartyLocationRoles<T>, T>;
  delete(
    dirPartyTableFkPartyNumberOrEntity: any,
    logisticsLocationFkLocationId?: string,
    logisticsLocationRoleFkName?: string
  ): DeleteRequestBuilder<PartyLocationRoles<T>, T> {
    return new DeleteRequestBuilder<PartyLocationRoles<T>, T>(
      this.entityApi,
      dirPartyTableFkPartyNumberOrEntity instanceof PartyLocationRoles
        ? dirPartyTableFkPartyNumberOrEntity
        : {
            DirPartyTable_FK_PartyNumber: dirPartyTableFkPartyNumberOrEntity!,
            LogisticsLocation_FK_LocationId: logisticsLocationFkLocationId!,
            LogisticsLocationRole_FK_Name: logisticsLocationRoleFkName!
          }
    );
  }
}
