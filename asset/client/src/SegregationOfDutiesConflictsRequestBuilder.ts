/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SegregationOfDutiesConflicts } from './SegregationOfDutiesConflicts';

/**
 * Request builder class for operations supported on the {@link SegregationOfDutiesConflicts} entity.
 */
export class SegregationOfDutiesConflictsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SegregationOfDutiesConflicts<T>, T> {
  /**
   * Returns a request builder for querying all `SegregationOfDutiesConflicts` entities.
   * @returns A request builder for creating requests to retrieve all `SegregationOfDutiesConflicts` entities.
   */
  getAll(): GetAllRequestBuilder<SegregationOfDutiesConflicts<T>, T> {
    return new GetAllRequestBuilder<SegregationOfDutiesConflicts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SegregationOfDutiesConflicts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SegregationOfDutiesConflicts`.
   */
  create(
    entity: SegregationOfDutiesConflicts<T>
  ): CreateRequestBuilder<SegregationOfDutiesConflicts<T>, T> {
    return new CreateRequestBuilder<SegregationOfDutiesConflicts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SegregationOfDutiesConflicts` entity based on its keys.
   * @param segregationOfDutiesRuleValidFrom Key property. See {@link SegregationOfDutiesConflicts.segregationOfDutiesRuleValidFrom}.
   * @param segregationOfDutiesRuleValidTo Key property. See {@link SegregationOfDutiesConflicts.segregationOfDutiesRuleValidTo}.
   * @param segregationOfDutiesRuleName Key property. See {@link SegregationOfDutiesConflicts.segregationOfDutiesRuleName}.
   * @param user Key property. See {@link SegregationOfDutiesConflicts.user}.
   * @param existingRoleIdentifier Key property. See {@link SegregationOfDutiesConflicts.existingRoleIdentifier}.
   * @param existingDutyIdentifier Key property. See {@link SegregationOfDutiesConflicts.existingDutyIdentifier}.
   * @param newRoleIdentifier Key property. See {@link SegregationOfDutiesConflicts.newRoleIdentifier}.
   * @param newDutyIdentifier Key property. See {@link SegregationOfDutiesConflicts.newDutyIdentifier}.
   * @returns A request builder for creating requests to retrieve one `SegregationOfDutiesConflicts` entity based on its keys.
   */
  getByKey(
    segregationOfDutiesRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    segregationOfDutiesRuleValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    segregationOfDutiesRuleName: DeserializedType<T, 'Edm.String'>,
    user: DeserializedType<T, 'Edm.String'>,
    existingRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    existingDutyIdentifier: DeserializedType<T, 'Edm.String'>,
    newRoleIdentifier: DeserializedType<T, 'Edm.String'>,
    newDutyIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SegregationOfDutiesConflicts<T>, T> {
    return new GetByKeyRequestBuilder<SegregationOfDutiesConflicts<T>, T>(
      this.entityApi,
      {
        SegregationOfDutiesRuleValidFrom: segregationOfDutiesRuleValidFrom,
        SegregationOfDutiesRuleValidTo: segregationOfDutiesRuleValidTo,
        SegregationOfDutiesRuleName: segregationOfDutiesRuleName,
        User: user,
        ExistingRoleIdentifier: existingRoleIdentifier,
        ExistingDutyIdentifier: existingDutyIdentifier,
        NewRoleIdentifier: newRoleIdentifier,
        NewDutyIdentifier: newDutyIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SegregationOfDutiesConflicts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SegregationOfDutiesConflicts`.
   */
  update(
    entity: SegregationOfDutiesConflicts<T>
  ): UpdateRequestBuilder<SegregationOfDutiesConflicts<T>, T> {
    return new UpdateRequestBuilder<SegregationOfDutiesConflicts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SegregationOfDutiesConflicts`.
   * @param segregationOfDutiesRuleValidFrom Key property. See {@link SegregationOfDutiesConflicts.segregationOfDutiesRuleValidFrom}.
   * @param segregationOfDutiesRuleValidTo Key property. See {@link SegregationOfDutiesConflicts.segregationOfDutiesRuleValidTo}.
   * @param segregationOfDutiesRuleName Key property. See {@link SegregationOfDutiesConflicts.segregationOfDutiesRuleName}.
   * @param user Key property. See {@link SegregationOfDutiesConflicts.user}.
   * @param existingRoleIdentifier Key property. See {@link SegregationOfDutiesConflicts.existingRoleIdentifier}.
   * @param existingDutyIdentifier Key property. See {@link SegregationOfDutiesConflicts.existingDutyIdentifier}.
   * @param newRoleIdentifier Key property. See {@link SegregationOfDutiesConflicts.newRoleIdentifier}.
   * @param newDutyIdentifier Key property. See {@link SegregationOfDutiesConflicts.newDutyIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `SegregationOfDutiesConflicts`.
   */
  delete(
    segregationOfDutiesRuleValidFrom: Moment,
    segregationOfDutiesRuleValidTo: Moment,
    segregationOfDutiesRuleName: string,
    user: string,
    existingRoleIdentifier: string,
    existingDutyIdentifier: string,
    newRoleIdentifier: string,
    newDutyIdentifier: string
  ): DeleteRequestBuilder<SegregationOfDutiesConflicts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SegregationOfDutiesConflicts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SegregationOfDutiesConflicts` by taking the entity as a parameter.
   */
  delete(
    entity: SegregationOfDutiesConflicts<T>
  ): DeleteRequestBuilder<SegregationOfDutiesConflicts<T>, T>;
  delete(
    segregationOfDutiesRuleValidFromOrEntity: any,
    segregationOfDutiesRuleValidTo?: Moment,
    segregationOfDutiesRuleName?: string,
    user?: string,
    existingRoleIdentifier?: string,
    existingDutyIdentifier?: string,
    newRoleIdentifier?: string,
    newDutyIdentifier?: string
  ): DeleteRequestBuilder<SegregationOfDutiesConflicts<T>, T> {
    return new DeleteRequestBuilder<SegregationOfDutiesConflicts<T>, T>(
      this.entityApi,
      segregationOfDutiesRuleValidFromOrEntity instanceof
      SegregationOfDutiesConflicts
        ? segregationOfDutiesRuleValidFromOrEntity
        : {
            SegregationOfDutiesRuleValidFrom:
              segregationOfDutiesRuleValidFromOrEntity!,
            SegregationOfDutiesRuleValidTo: segregationOfDutiesRuleValidTo!,
            SegregationOfDutiesRuleName: segregationOfDutiesRuleName!,
            User: user!,
            ExistingRoleIdentifier: existingRoleIdentifier!,
            ExistingDutyIdentifier: existingDutyIdentifier!,
            NewRoleIdentifier: newRoleIdentifier!,
            NewDutyIdentifier: newDutyIdentifier!
          }
    );
  }
}
