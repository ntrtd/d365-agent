/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WhsMobileWorkSessions } from './WhsMobileWorkSessions';
import { WhsMobileWorkSessionsRequestBuilder } from './WhsMobileWorkSessionsRequestBuilder';
import { WhsMobileWorkLoginsApi } from './WhsMobileWorkLoginsApi';
import { WhsMobileWorkMenusApi } from './WhsMobileWorkMenusApi';
import { WhsMobileWorkGuidedCycleCountingApi } from './WhsMobileWorkGuidedCycleCountingApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WhsMobileWorkSessionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WhsMobileWorkSessions<DeSerializersT>, DeSerializersT>
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
  ): WhsMobileWorkSessionsApi<DeSerializersT> {
    return new WhsMobileWorkSessionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link login} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOGIN: OneToOneLink<
      WhsMobileWorkSessions<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkLoginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link menu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MENU: OneToOneLink<
      WhsMobileWorkSessions<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkMenusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link guidedCycleCounting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUIDED_CYCLE_COUNTING: OneToOneLink<
      WhsMobileWorkSessions<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkGuidedCycleCountingApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WhsMobileWorkLoginsApi<DeSerializersT>,
      WhsMobileWorkMenusApi<DeSerializersT>,
      WhsMobileWorkGuidedCycleCountingApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LOGIN: new OneToOneLink('Login', this, linkedApis[0]),
      MENU: new OneToOneLink('Menu', this, linkedApis[1]),
      GUIDED_CYCLE_COUNTING: new OneToOneLink(
        'GuidedCycleCounting',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = WhsMobileWorkSessions;

  requestBuilder(): WhsMobileWorkSessionsRequestBuilder<DeSerializersT> {
    return new WhsMobileWorkSessionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WhsMobileWorkSessions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WhsMobileWorkSessions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WhsMobileWorkSessions<DeSerializersT>,
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
    typeof WhsMobileWorkSessions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WhsMobileWorkSessions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      WhsMobileWorkSessions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      WhsMobileWorkSessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_WORK_ITEM: OrderableEdmTypeField<
      WhsMobileWorkSessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link login} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOGIN: OneToOneLink<
      WhsMobileWorkSessions<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkLoginsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link menu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MENU: OneToOneLink<
      WhsMobileWorkSessions<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkMenusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link guidedCycleCounting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GUIDED_CYCLE_COUNTING: OneToOneLink<
      WhsMobileWorkSessions<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkGuidedCycleCountingApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WhsMobileWorkSessions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('UserId', 'Edm.String', true),
        /**
         * Static representation of the {@link currentWorkItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_WORK_ITEM: fieldBuilder.buildEdmTypeField(
          'CurrentWorkItem',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WhsMobileWorkSessions)
      };
    }

    return this._schema;
  }
}
