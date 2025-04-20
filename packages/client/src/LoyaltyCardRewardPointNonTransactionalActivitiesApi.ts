/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoyaltyCardRewardPointNonTransactionalActivities } from './LoyaltyCardRewardPointNonTransactionalActivities';
import { LoyaltyCardRewardPointNonTransactionalActivitiesRequestBuilder } from './LoyaltyCardRewardPointNonTransactionalActivitiesRequestBuilder';
import { RetailAffiliationsApi } from './RetailAffiliationsApi';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { RetailLoyaltyCardRewardPointNonTransactionalActivityStatus } from './RetailLoyaltyCardRewardPointNonTransactionalActivityStatus';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LoyaltyCardRewardPointNonTransactionalActivitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LoyaltyCardRewardPointNonTransactionalActivitiesApi<DeSerializersT> {
    return new LoyaltyCardRewardPointNonTransactionalActivitiesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailAffiliation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailAffiliationsApi<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_AFFILIATION: new OneToOneLink(
        'RetailAffiliation',
        this,
        linkedApis[0]
      ),
      OPERATING_UNIT: new OneToOneLink('OperatingUnit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LoyaltyCardRewardPointNonTransactionalActivities;

  requestBuilder(): LoyaltyCardRewardPointNonTransactionalActivitiesRequestBuilder<DeSerializersT> {
    return new LoyaltyCardRewardPointNonTransactionalActivitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LoyaltyCardRewardPointNonTransactionalActivities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LoyaltyCardRewardPointNonTransactionalActivities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NON_TRANSACTIONAL_ACTIVITY_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyCardRewardPointNonTransactionalActivityStatus,
      true,
      true
    >;
    ENTRY_TIME: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOYALTY_OTHER_ACTIVITY_TYPE_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ERROR_LOGS: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OM_OPERATING_UNIT_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RETAIL_AFFILIATION_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailAffiliation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LoyaltyCardRewardPointNonTransactionalActivities<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link nonTransactionalActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_TRANSACTIONAL_ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'NonTransactionalActivityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailLoyaltyCardRewardPointNonTransactionalActivityStatus,
          true
        ),
        /**
         * Static representation of the {@link entryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TIME: fieldBuilder.buildEdmTypeField(
          'EntryTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link loyaltyOtherActivityTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_OTHER_ACTIVITY_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyOtherActivityTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'EntryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link errorLogs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_LOGS: fieldBuilder.buildEdmTypeField(
          'ErrorLogs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link omOperatingUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link retailAffiliationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_AFFILIATION_ID: fieldBuilder.buildEdmTypeField(
          'RetailAffiliationId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          LoyaltyCardRewardPointNonTransactionalActivities
        )
      };
    }

    return this._schema;
  }
}
